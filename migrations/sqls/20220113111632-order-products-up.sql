CREATE TABLE order_products (id SERIAL PRIMARY KEY,amount int);
ALTER TABLE order_products ADD COLUMN order_id INT NOT NULL ;
ALTER TABLE order_products ADD FOREIGN KEY (order_id) REFERENCES orders(id);
ALTER TABLE order_products ADD COLUMN product_id INT NOT NULL ;
ALTER TABLE order_products ADD FOREIGN KEY (product_id) REFERENCES products(id);

