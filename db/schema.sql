DROP DATABASE IF EXISTS quiztips_db;
CREATE DATABASE quiztips_db;

USE quiztips_db;

--create tables 
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password 
  
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_id INT,
  review TEXT,
  FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL

);

--seed tables

INSERT INTO movies (movie_name)
VALUES('Space Balls'),
  ('Brazil'),
  ('Better off Dead');

INSERT INTO reviews(movie_id, review)
VALUES(3,'I want my two dollars'),
  (1,"They've gone to plaid"),
  (2,'Disturbing but unfortunately somewhat accurate')