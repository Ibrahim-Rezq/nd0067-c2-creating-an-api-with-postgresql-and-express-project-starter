CREATE TABLE order_products (id SERIAL PRIMARY KEY);
ALTER TABLE order_products ADD CONSTRAINT product_id FOREIGN KEY (id) REFERENCES products(id) ;
ALTER TABLE order_products ADD CONSTRAINT order_id FOREIGN KEY (id) REFERENCES orders(id) ;
