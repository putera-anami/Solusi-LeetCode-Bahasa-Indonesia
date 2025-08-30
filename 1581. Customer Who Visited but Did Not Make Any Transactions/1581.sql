SELECT customer_id, COUNT(visit_id) AS count_no_trans
FROM Visits
LEFT JOIN Transactions
USING (visit_id)
WHERE transaction_id IS NULL
GROUP BY customer_id;

-- USING (visit_id) adalah alternatif dari ON Visits.visit_id = Transactions.visit_id.