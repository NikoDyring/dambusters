# Build stage
FROM node:14.15 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM node:14.15 as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist
COPY package*.json /app/
ENV NODE_ENV=production
RUN npm ci --silent
CMD [ "npm", "start" ]

LABEL authors="png-gang.ts"
