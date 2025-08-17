SELECT DISTINCT author_id AS id -- pilih dengan nilai unik (tanpa duplikat) pada kolom author_id dengan alias id,
FROM Views -- dari tabel Views,
WHERE author_id = viewer_id -- di mana kolom author_id nilainya sama dengan viewer_id.
ORDER BY author_id ASC; -- lalu urutkan berdasarkan kolom author_id dari nilai kecil ke besar.