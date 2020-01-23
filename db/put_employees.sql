UPDATE employees
SET (first, last, email, gender) = ($2, $3, $4, $5)
WHERE id = $1;
SELECT * FROM employees;