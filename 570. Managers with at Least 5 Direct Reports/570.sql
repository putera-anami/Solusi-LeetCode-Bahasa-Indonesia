SELECT m.name
FROM employee e
INNER JOIN employee m
ON e.managerId = m.id
GROUP BY e.managerId
HAVING COUNT(e.id) >= 5;