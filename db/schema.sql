### Schema
DROP DATABASE IF EXISTS dietCheater_db;
CREATE DATABASE dietCheater_db;
USE dietCheater_db;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  weight-lb DECIMAL(10,2) NOT NULL,
  weight-kg DECIMAL(10,2) DEFAULT (COALESCE(weight-lb,0)*.45392),
  PRIMARY KEY (id)
);

CREATE TABLE exercise (
    id INT NOT NULL AUTO_INCREMENT,
    x_name VARCHAR(50) NULL,
    male_factor DECIMAL(10,6) NOT NULL
    female_factor DECIMAL(10,6) NOT NULL,
)


