# build instructions
FROM node

EXPOSE 9001

WORKDIR /reservation
ENV NODE_ENV=production
RUN npm install
RUN npm run build

CMD npm start
