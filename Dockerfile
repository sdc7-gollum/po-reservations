# build instructions
FROM node

EXPOSE 9001

# RUN git clone https://github.com/project-overnight/po-reservations.git

WORKDIR /reservation
ENV NODE_ENV=production
RUN npm install
COPY . /reservation
RUN npm run build

CMD npm start
