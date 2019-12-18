INSERT INTO customer_order (
    customer_id,
    paid
)
VALUES 
(
    $1, 
    false
)
RETURNING customer_order_id, paid;