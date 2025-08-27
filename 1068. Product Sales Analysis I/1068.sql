SELECT product_name, year, price -- Pilih kolom product_name, year, dan price,
FROM Sales -- dari tabel Sales,
JOIN Product -- lalu gabungkan dengan tabel Product.
ON Sales.product_id = Product.product_id; -- Pada kondisi di mana kolom product_id di tabel Sales sama dengan kolom product_id di tabel Product.