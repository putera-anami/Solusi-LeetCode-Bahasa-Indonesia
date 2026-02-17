WITH DailyTotals AS (
    SELECT visited_on, SUM(amount) AS daily_amount
    FROM Customer
    GROUP BY visited_on
),
RollingStats AS (
    SELECT 
        visited_on,
        SUM(daily_amount) OVER(ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,
        ROUND(AVG(daily_amount) OVER(ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW), 2) AS average_amount,
        DENSE_RANK() OVER(ORDER BY visited_on) AS day_num
    FROM DailyTotals
)
SELECT visited_on, amount, average_amount
FROM RollingStats
WHERE day_num >= 7
ORDER BY visited_on;