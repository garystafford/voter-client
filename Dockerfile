FROM node:latest
LABEL maintainer "Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-04-17
WORKDIR /tmp/dist
COPY ./dist /tmp/dist
EXPOSE 9090
CMD [ "node", "server.js" ]
