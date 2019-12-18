CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(250) NOT NULL
);



CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50),
    product_image VARCHAR(250),
    product_description TEXT,
    price DECIMAL
);


CREATE TABLE customer_order (
    customer_order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    paid BOOLEAN
);


CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    customer_order_id INT REFERENCES customer_order(customer_order_id),
    product_id INT REFERENCES products(product_id),
    qty INT,
    price DECIMAL
)