CREATE TABLE orders (id SERIAL PRIMARY KEY,amount int, state bool);
ALTER TABLE orders ADD CONSTRAINT product_id FOREIGN KEY (id) REFERENCES products(id) ;
ALTER TABLE orders ADD CONSTRAINT user_id FOREIGN KEY (id) REFERENCES users(id) ;
