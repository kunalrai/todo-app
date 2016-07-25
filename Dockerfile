FROM ubuntu:14.04
RUN mkdir /root/web
COPY . /root/web
RUN cd /root/web
EXPOSE 3000
CMD cd /root/web;  node server.js
