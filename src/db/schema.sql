DROP DATABSE IF EXISTS foods_db;
CREATE DATABASE foods_db;

USE foods_db;

CREATE TABLE foods (
    id INT UNSIGNED NOT NULL AUTO_INCREMENTT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE
)