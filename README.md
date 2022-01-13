# Storefront Backend Project

## 1. DB Creation and Migrations

Database Name :storefront
creation command :CREATE DATABASE storefront

### scripts

- install pkgs : npm i
- code to run migrations UP : npm run up
- code to run migrations Down : npm run down
- watch file : npm run watch
- start file dev : npm run start-dev
- build file : npm run build
- start file : npm run start
- test file : npm run test

## 2. Schema && Routes

### Routes

#### users

| Endpoints        | Requstes | pramters                                      | Req Tokn |
| ---------------- | :------: | --------------------------------------------- | :------: |
| **/Users**       | **GET**  | **N/A**                                       | **N/A**  |
| **/Users/:id**   | **GET**  | **ID**                                        | **N/A**  |
| **/Users**       | **POST** | **id,firstname ,lastname,username ,password** | **N/A**  |
| **/Users/login** | **POST** | **username,password**                         | **YES**  |

#### Orders

| Endpoints       | Requstes | pramters                         | Req Tokn |
| --------------- | :------: | -------------------------------- | :------: |
| **/Orders**     | **GET**  | **N/A**                          | **N/A**  |
| **/Orders/:id** | **GET**  | **ID**                           | **N/A**  |
| **/Orders**     | **POST** | **id,amount, state ,product_id** | **N/A**  |

#### Products

| Endpoints         | Requstes | pramters          | Req Tokn |
| ----------------- | :------: | ----------------- | :------: |
| **/Products**     | **GET**  | **N/A**           | **N/A**  |
| **/Products/:id** | **GET**  | **ID**            | **N/A**  |
| **/Products**     | **POST** | **id,name,price** | **N/A**  |

### Schema

#### Users

| Column    | Type                   | Collation | Nullable | Default                           |
| --------- | ---------------------- | --------- | -------- | --------------------------------- |
| id        | integer                |           | not null | nextval('users_id_seq'::regclass) |
| firstname | character varying(100) |           |          |
| lastname  | character varying(100) |           |          |
| username  | character varying(100) |           |          |
| password  | character varying      |           |          |

Indexes:
"users_pkey" PRIMARY KEY, btree (id)
Referenced by:
TABLE "orders" CONSTRAINT "user_id" FOREIGN KEY (id) REFERENCES users(id)

#### Orders

| Column | Type    | Collation | Nullable | Default                            |
| ------ | ------- | --------- | -------- | ---------------------------------- |
| id     | integer |           | not null | nextval('orders_id_seq'::regclass) |
| amount | integer |           |          |
| state  | boolean |           |          |

Indexes:
"orders_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
"product_id" FOREIGN KEY (id) REFERENCES products(id)
"user_id" FOREIGN KEY (id) REFERENCES users(id)

#### Products

| Column | Type                   | Collation | Nullable | Default                              |
| ------ | ---------------------- | --------- | -------- | ------------------------------------ |
| id     | integer                |           | not null | nextval('products_id_seq'::regclass) |
| name   | character varying(100) |           |          |
| price  | integer                |           |          |

Indexes:
"products_pkey" PRIMARY KEY, btree (id)
Referenced by:
TABLE "orders" CONSTRAINT "product_id" FOREIGN KEY (id) REFERENCES products(id)
