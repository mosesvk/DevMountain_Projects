INSERT INTO users 
(
  username,
  first_name, 
  last_name, 
  email,
  password
)
VALUES 
(
  ${username},
  ${first_name},
  ${last_name},
  ${email},
  ${hash}
)