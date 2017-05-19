FROM node:apline
LABEL maintainer "Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-04-17
VOLUME /tmp
EXPOSE 9090
RUN set -ex \
  && apk update \
  && apk upgrade \
  && apk add git unzip
RUN mkdir /client \
  && git clone --depth 1 --branch build-artifacts \
      "https://github.com/garystafford/voter-client.git" /client \
  && cd /client \
  && unzip dist-voter-client-0.3.*.zip \
  && mv dist-voter-client-0.3.*.zip voter-service.jar

  CMD [ "node", "server.js" ]
