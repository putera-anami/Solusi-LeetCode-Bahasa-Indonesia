SELECT unique_id, name -- Pilih kolom unique_id dan name,
FROM Employees -- dari tabel Employees,
LEFT JOIN EmployeeUNI -- lalu gabungkan dengan tabel EmployeeUNI dengan mengambil semua data dari tabel sebelah kiri (Employees).
ON Employees.id = EmployeeUNI.id; -- Pada kondisi di mana kolom id di tabel Employees sama dengan kolom id di tabel EmployeeUNI.

-- Jika pada tabel EmployeeUNI tidak ditemukan baris yang cocok, maka data dari tabel Employees tetap muncul, tapi kolom dari EmployeeUNI akan bernilai null.