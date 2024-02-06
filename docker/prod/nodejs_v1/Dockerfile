FROM node:18.19.0

RUN mkdir /code
# Copy codebase
COPY . /code

# Set working directory
WORKDIR /code

# Install dependencies
ADD package.json yarn.lock /code/
RUN yarn install
ENV PATH="/code/node_modules/.bin:$PATH"

RUN npm run build

CMD ["npm","run", "start"]