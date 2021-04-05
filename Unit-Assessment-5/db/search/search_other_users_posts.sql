SELECT *
FROM helo_posts p
JOIN helo_users u ON p.author_id = u.id AS post_id
WHERE NOT u.username AS author_username = $1;
-- ORDER BY date_created DESC;
