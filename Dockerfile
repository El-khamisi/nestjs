# Base Image
FROM node:18 AS Builder

# Create app directory
WORKDIR /dendots

# copy requirements
COPY package*.json ./

ENV NODE_ENV=development

# Install app dependencies
RUN npm i

# Bundle app 
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build


FROM node:18 AS Production

# Create app directory
WORKDIR /dendots

# copy requirements
COPY package*.json ./

ENV NODE_ENV=production

# Install app dependencies
RUN npm ci

# copy files has been built
COPY --from=Builder /dendots/dist ./dist

CMD [ "npm", "run", "start:prod" ]