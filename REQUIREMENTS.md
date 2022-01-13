# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

| Endpoints         | Requstes | pramters          | Req Tokn |
| ----------------- | :------: | ----------------- | :------: |
| **/Products**     | **GET**  | **N/A**           | **N/A**  |
| **/Products/:id** | **GET**  | **ID**            | **N/A**  |
| **/Products**     | **POST** | **id,name,price** | **N/A**  |

#### Users

| Endpoints        | Requstes | pramters                                      | Req Tokn |
| ---------------- | :------: | --------------------------------------------- | :------: |
| **/Users**       | **GET**  | **N/A**                                       | **N/A**  |
| **/Users/:id**   | **GET**  | **ID**                                        | **N/A**  |
| **/Users**       | **POST** | **id,firstname ,lastname,username ,password** | **N/A**  |
| **/Users/login** | **POST** | **username,password**                         | **YES**  |

#### Orders

| Endpoints       | Requstes | pramters                      | Req Tokn |
| --------------- | :------: | ----------------------------- | :------: |
| **/Orders**     | **GET**  | **N/A**                       | **N/A**  |
| **/Orders/:id** | **GET**  | **ID**                        | **N/A**  |
| **/Orders**     | **POST** | **id,amount, state ,user_id** | **N/A**  |

## Data Shapes

#### Product

| Column | Type                   | Collation | Nullable | Default                              |
| ------ | ---------------------- | --------- | -------- | ------------------------------------ |
| id     | integer                |           | not null | nextval('products_id_seq'::regclass) |
| name   | character varying(100) |           |          |
| price  | integer                |           |          |

Indexes:
"products_pkey" PRIMARY KEY, btree (id)
Referenced by:
TABLE "orders" CONSTRAINT "product_id" FOREIGN KEY (id) REFERENCES products(id)

#### User

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
