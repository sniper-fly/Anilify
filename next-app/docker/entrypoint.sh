#!/bin/sh

# カレントディレクトリの uid と gid を調べる
uid=$(stat -c "%u" .)
gid=$(stat -c "%g" .)

if [ "$uid" -ne 0 ]; then
  if [ "$(id -g $USER)" -ne $gid ]; then
    # builder ユーザーの gid とカレントディレクトリの gid が異なる場合、
    # builder の gid をカレントディレクトリの gid に変更し、ホームディレクトリの
    # gid も正常化する。
    getent group $gid >/dev/null 2>&1 || groupmod -g $gid $USER
    chgrp -R $gid $HOME
  fi
  if [ "$(id -u $USER)" -ne $uid ]; then
    # builder ユーザーの uid とカレントディレクトリの uid が異なる場合、
    # builder の uid をカレントディレクトリの uid に変更する。
    # ホームディレクトリは usermod によって正常化される。
    usermod -u $uid $USER
  fi
fi

node_module_owner=$(stat -c "%u" ./node_modules)
node_module_group=$(stat -c "%g" ./node_modules)
if [ $node_module_owner -ne $uid ] || [ $node_module_group -ne $gid ] ; then
  echo "Fixing node_modules permissions..."
  chown -R $USER:$USER ./node_modules
fi

# このスクリプト自体は root で実行されているので、uid/gid 調整済みの builder ユーザー
# として指定されたコマンドを実行する。
# tini が正しく終了できるように、execは利用しない
su-exec $USER "$@"
