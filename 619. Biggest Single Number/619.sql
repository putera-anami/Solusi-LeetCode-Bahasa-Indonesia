SELECT MAX(num) AS num
FROM MyNumbers
WHERE num IN (
    SELECT num
    from MyNumbers
    GROUP BY num
    HAVING COUNT(*) = 1
);