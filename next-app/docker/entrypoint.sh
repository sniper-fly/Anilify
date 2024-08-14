#!/bin/sh

# カレントディレクトリの uid と gid を調べる
uid=$(stat -c "%u" .)
gid=$(stat -c "%g" .)

if [ "$uid" -ne 0 ]; then
  if [ "$(id -g $USER)" -ne $gid ]; then
    # node ユーザーの gid とカレントディレクトリの gid が異なる場合、
    # node の gid をカレントディレクトリの gid に変更し、ホームディレクトリの
    # gid も正常化する。
    getent group $gid >/dev/null 2>&1 || groupmod -g $gid $USER
    chgrp -R $gid $HOME
  fi
  if [ "$(id -u $USER)" -ne $uid ]; then
    # node ユーザーの uid とカレントディレクトリの uid が異なる場合、
    # node の uid をカレントディレクトリの uid に変更する。
    # ホームディレクトリは usermod によって正常化される。
    usermod -u $uid $USER
  fi
fi

# node_modules/ が存在しない場合、npm install を実行する
if [ ! -d "node_modules" ]; then
  gosu $USER npm i
  # "next": "14.1.0" では以下のコマンドがないとDockerデバッグができない
  sed -Ei '/NODE_OPTIONS.*nodeDebugType.*/s//NODE_OPTIONS = `${NODE_OPTIONS} --${nodeDebugType}=0.0.0.0:9230`;/' node_modules/next/dist/cli/next-dev.js
fi

# このスクリプト自体は root で実行されているので、uid/gid 調整済みの node ユーザー
# として指定されたコマンドを実行する。
# initの子プロセスとして正しく終了できるように、execは利用しない
gosu $USER "$@"
