SELECT name -- Pilih kolom name,
FROM Customer -- dari tabel Customer,
WHERE referee_id != 2 OR referee_id IS null; -- di mana referee_id bukan 2 atau referee_id adalah null.