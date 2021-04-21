UPDATE users 
SET
  username=${username}, 
  first_name=${firstName}, 
  last_name=${lastName}, 
  email=${email}
WHERE 
  user_id = ${userId}

returning *;