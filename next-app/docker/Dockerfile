FROM node:20-alpine

WORKDIR /app

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache \
  su-exec \
  shadow \
  tini

# ビルド時、 UID 1000 の node が存在する
# entrypointで UID/GID の変更を行うため、root でないと実行できない
# そのため USER 命令は定義しない
# USER node
ENV USER=node
ENV HOME=/home/$USER

COPY entrypoint.sh /

ENTRYPOINT ["tini", "--", "/entrypoint.sh"]
CMD ["npm", "run", "dev"]
