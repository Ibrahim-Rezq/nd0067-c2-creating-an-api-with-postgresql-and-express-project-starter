# Storefront Backend Project

## 1. DB & Server Info

- **Database Name** :storefront
- **Database creation** command :CREATE DATABASE storefront
- **Database_test Name** :storefront_test
- **Database_test creation command** :CREATE DATABASE storefront_test
- **Postgres User**: postgres
- **Postgres User password**: password
- **Server hosted on**: 127.0.0.1:3000
- **DATABASE hosted on**: localhost:5432

## scripts

### For

- installing pkgs : npm i
- running migrations UP : npm run up
- running migrations Down : npm run down
- watching server file : npm run watch
- starting server file dev : npm run start-dev
- building server : npm run build
- starting file : npm run start
- to run test: npm run test

### P.S

npm run test may break with os change to fix this use this script instead **npm run test-fix** and befour that set the ENV variable to dev in the .env file manually -> ENV=dev

## .env variables:

### this was a recommendation by a reviewer

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=storefront
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_TEST_DB=storefront_test

ENV=build
TOKEN_SECRET=secretjwt
BCRYPT_PASSWORD=your-secret-password
SALT_ROUNDS=10

TEST_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxOCwiZmlyc3RuYW1lIjoicmV6IiwibGFzdG5hbWUiOiJyZXEiLCJ1c2VybmFtZSI6IkhvdmljIiwicGFzc3dvcmQiOiIkMmIkMTAkU3EyVGdoUUpaTndsZG82ZGpXd2IxZUdxbjE1L0lrU1RHVENlLk51UnFZNm1FdmJ0c2g3emEifSwiaWF0IjoxNjQyMDY5NTc0fQ.8R4O0y5bZSw6G-5kpynH5FiZoG9QSL9XuH6VGgwa6t0
