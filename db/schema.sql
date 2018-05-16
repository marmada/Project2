#Schema

DROP DATABASE IF EXISTS dietCheater_db;
CREATE DATABASE dietCheater_db;
USE dietCheater_db;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  nickname VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100),
  weightlb DECIMAL(10,2) NOT NULL,
  weightkg DECIMAL(10,2) AS (COALESCE(weightlb,0)*.45392),
  PRIMARY KEY (id)
);

CREATE TABLE exercise(
    id INT NOT NULL AUTO_INCREMENT,
    x_name VARCHAR(50) NULL,
    male_factor DECIMAL(10,6) NOT NULL,
    female_factor DECIMAL(10,6) NOT NULL,
	PRIMARY KEY (id)
);
