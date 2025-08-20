SELECT tweet_id -- Pilih kolom tweet_id,
FROM Tweets -- dari tabel Tweets, 
WHERE CHAR_LENGTH(content) > 15; -- di mana panjang karakter dari kolom content lebih dari 15.

-- Catatan penting!
-- SELECT LENGTH('€'), CHAR_LENGTH('€'); -- Coba jalankan query ini.
-- LENGTH akan menghasilkan 3, sedangkan CHAR_LENGTH akan menghasilkan 1.
-- Hal ini dikarenakan LENGTH menghitung jumlah byte yang direpresentasikan € yaitu 3 byte (0xE2 0x82 0xAC).
-- Di sisi lain, CHAR_LENGTH hanya mengembalikan jumlah karakter.