Perbedaan for loop

| Aspek                       | `for (let i = 0; i < nums.length; i++)` | `for (let i of nums)` |
| --------------------------- | --------------------------------------- | --------------------- |
| Akses ke indeks             | ✅ Ya                                  | ❌ Tidak              |
| Akses ke nilai              | ✅ Ya, lewat `nums[i]`                 | ✅ Langsung (`i`)     |
| Bisa digunakan untuk mutasi | ✅ Ya, bisa ubah `nums[i]`             | ⚠️ Tidak langsung     |
| Lebih ringkas & readable    | ❌ Agak verbose                        | ✅ Lebih ringkas      |
