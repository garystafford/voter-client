FROM nginx:1.13.8-alpine

LABEL maintainer="Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-12-27

RUN set -x \
  && apk update \
  && apk upgrade \
  && apk add git unzip

RUN \
  git clone --depth 1 --branch build-artifacts-angular \
      "https://github.com/garystafford/voter-client.git" \
  && cd voter-client \
  && unzip *.zip \
  && mv /voter-client/dist/*.* /usr/share/nginx/html \
  && rm -rf /voter-client

WORKDIR /usr/share/nginx/html

EXPOSE 80
