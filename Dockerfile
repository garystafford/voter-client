FROM node:alpine
LABEL maintainer "Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-05-19
VOLUME /tmp
EXPOSE 9090
RUN set -ex \
  && apk update \
  && apk upgrade \
  && apk add git unzip
RUN mkdir client \
  && git clone --depth 1 --branch build-artifacts \
      "https://github.com/garystafford/voter-client.git" /client \
  && cd /client \
  && unzip *.zip \
  && mv dist/* . \

  CMD [ "node", "server.js" ]
