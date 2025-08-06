-- 1. Display all information from the ChuyenGia table.
SELECT * FROM ChuyenGia;
-- 2. List full name and email of all experts.
SELECT HoTen,Email FROM ChuyenGia;
-- 3. Display company name and number of employees of all companies.
SELECT TenCongTy,SoNhanVien FROM CongTy;
-- 4. List names of projects that are in the 'In Progress' status.
SELECT TenDuAn FROM DuAn WHERE TrangThai = 'Đang thực hiện';
-- 5. Display name and type of all skills.
SELECT TenKyNang, LoaiKyNang FROM KyNang;
-- 6. List full name and major of male experts.
SELECT HoTen, ChuyenNganh FROM ChuyenGia WHERE GioiTinh = 'Nam';
-- 7. Display company name and field of companies with more than 150 employees.
SELECT TenCongTy, LinhVuc FROM CongTy WHERE SoNhanVien > 150;
-- 8. List names of projects that started in 2023.
SELECT TenDuAn FROM DuAn WHERE YEAR(NgayBatDau) = 2023;
-- 9. Display skill names that belong to the 'Tool' type.
SELECT TenKyNang FROM KyNang WHERE LoaiKyNang = 'Công cụ';
-- 10. List full name and years of experience of experts with more than 5 years of experience.
SELECT HoTen,NamKinhNghiem FROM ChuyenGia WHERE NamKinhNghiem > 5;
-- 11. Display company name and address of companies in the 'Software Development' field.
SELECT TenCongTy, DiaChi FROM CongTy WHERE LinhVuc = 'Phát triển phần mềm';
-- 12. List names of projects with an end date in 2023.
SELECT TenDuAn FROM DuAn WHERE YEAR(NgayKetThuc) = 2023;
-- 13. Display name and level of skills in the ChuyenGia_KyNang table.
SELECT k.TenKyNang, c.CapDo
FROM ChuyenGia_KyNang c
JOIN KyNang k ON c.MaKyNang = k.MaKyNang;
-- 14. List expert ID and role in projects from the ChuyenGia_DuAn table.
SELECT MaChuyenGia, VaiTro FROM ChuyenGia_DuAn;
-- 15. Display full name and birthdate of experts born in 1990 or later.
SELECT HoTen, NgaySinh FROM ChuyenGia WHERE YEAR(NgaySinh) >= 1990;
-- 16. List company name and number of employees, sorted by number of employees in descending order. -- Hiển thị tên công ty và số nhân viên, giảm dần theo số nhân viên:
SELECT TenCongTy, SoNhanVien FROM CongTy ORDER BY SoNhanVien DESC;
-- 17. Display project name and start date, sorted by start date in ascending order.
SELECT TenDuAn, NgayBatDau FROM DuAn ORDER BY NgayBatDau ASC; 
-- 18. List skill names, displaying each name only once (remove duplicates).
SELECT DISTINCT TenKyNang FROM KyNang;
-- 19. Display full name and email of the first 5 experts in the list.
SELECT HoTen, Email FROM ChuyenGia LIMIT 5;
-- 20. List company names that contain the word 'Tech'.
SELECT TenCongTy FROM CongTy WHERE TenCongTy LIKE '%Tech%';
-- 21. Display project name and status, excluding completed projects. -- Hiển thị tên dự án và trạng thái, loại trừ các dự án đã hoàn thành:
SELECT TenDuAn, TrangThai FROM DuAn WHERE TrangThai <> 'Hoàn thành';
-- 22. List full name and major of experts, sorted by major and full name.
SELECT HoTen, ChuyenNganh FROM ChuyenGia ORDER BY ChuyenNganh ASC, HoTen ASC;
-- 23. Display company name and field, including only companies with 100 to 200 employees.
SELECT TenCongTy, SoNhanVien FROM CongTy WHERE SoNhanVien BETWEEN 100 AND 200;
-- 24. List skill name and skill type, sorted by skill type in descending order and skill name in ascending order.-Liệt kê tên và loại kỹ năng, sắp theo loại giảm dần, tên tăng dần:
SELECT TenKyNang, LoaiKyNang FROM KyNang ORDER BY LoaiKyNang DESC, TenKyNang ASC;
-- 25. Display full name and phone number of experts whose emails use the 'email.com' domain.
SELECT HoTen, SoDienThoai FROM ChuyenGia WHERE Email LIKE '%email.com%'; 
