FROM node:alpine
LABEL maintainer "Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-05-19c
EXPOSE 9090

RUN set -x \
  && apk update \
  && apk upgrade \
  && apk add git unzip

ENV NODE_ENV=production
RUN npm install --production
RUN npm install -g bower forever pm2 gulp-cli

RUN mkdir client \
  && git clone --depth 1 --branch build-artifacts \
      "https://github.com/garystafford/voter-client.git" client \
  && cd client \
  && ls -ah \
  && pwd \
  && unzip *.zip \
  && cd dist

WORKDIR /client/dist

RUN bower install --allow-root --production --config.directory=bower_components

RUN pm2 start server.js \
  && pm2 save \
  && pm2 startup

CMD [ "pm2 start server.js" ]
