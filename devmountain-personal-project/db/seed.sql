CREATE TABLE users (
  user_id SERIAL PRIMARY KEY, 
  username VARCHAR(50),
  first_name VARCHAR(50), 
  last_name VARCHAR(50),
  email VARCHAR(60),
  password TEXT, 
  phone_number VARCHAR(13),
  paid BOOLEAN
);

CREATE TABLE programs ( 
  program_id SERIAL PRIMARY KEY, 
  start_date DATE, 
  end_date DATE, 
  price NUMERIC, 
  instructor VARCHAR(50),
  users_enrolled INT
);

CREATE TABLE userProgram (
  user_id INT REFERENCES users(user_id) ON DELETE cascade, 
  program_id INT REFERENCES programs(program_id)
)
