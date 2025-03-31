FROM node:lts-buster
RUN git clone https://github.com/rahulmaster143RAHUL-AI-V3/root/ikrahulmaster143
WORKDIR /root/ikJawad
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
