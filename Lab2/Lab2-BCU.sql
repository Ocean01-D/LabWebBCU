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
-- 26. List all experts and sort by full name.
SELECT * FROM ChuyenGia ORDER BY HoTen;
-- 27. Display name and phone number of experts whose major is 'Phát triển phần mềm'.
SELECT HoTen, SoDienThoai FROM ChuyenGia WHERE ChuyenNganh = 'Phát triển phần mềm';
-- 28. List all companies with more than 100 employees.
SELECT * FROM CongTy WHERE SoNhanVien > 100;
-- 29. Display name and start date of projects that started in 2023.
SELECT TenDuAn, NgayBatDau FROM DuAn WHERE YEAR(NgayBatDau) = 2023;
-- 30. List all skills and sort by skill name.
SELECT * FROM KyNang ORDER BY TenKyNang;
-- 31. Display name and email of experts who are under 35 years old (as of 2024).
SELECT HoTen, Email
FROM ChuyenGia
WHERE YEAR('2024-01-01') - YEAR(NgaySinh) < 35;
-- 32. Display name and major of female experts.
SELECT HoTen, ChuyenNganh FROM ChuyenGia WHERE GioiTinh = 'Nữ';
-- 33. List names of skills of type 'Công nghệ'.
SELECT TenKyNang FROM KyNang WHERE LoaiKyNang = 'Công nghệ';
-- 34. Display name and address of companies in the field of 'Phân tích dữ liệu'.
SELECT TenCongTy, DiaChi FROM CongTy WHERE LinhVuc = 'Phân tích dữ liệu';
-- 35. List names of projects with status 'Hoàn thành'.
SELECT TenDuAn FROM DuAn WHERE TrangThai = 'Hoàn thành';
-- 36. Display name and years of experience of experts, sorted by years of experience in descending order.
SELECT HoTen, NamKinhNghiem FROM ChuyenGia ORDER BY NamKinhNghiem DESC;
-- 37. List company names and number of employees, only showing companies with 100 to 200 employees.
SELECT TenCongTy, SoNhanVien FROM CongTy WHERE SoNhanVien BETWEEN 100 AND 200;
-- 38. Display project name and end date of projects that ended in 2023.
SELECT TenDuAn, NgayKetThuc FROM DuAn WHERE YEAR(NgayKetThuc) = 2023;
-- 39. List names and emails of experts whose names start with the letter 'N'.
SELECT HoTen, Email FROM ChuyenGia WHERE HoTen LIKE 'N%';
-- 40. Display skill name and type, excluding skills of type 'Ngôn ngữ lập trình'.
SELECT TenKyNang, LoaiKyNang FROM KyNang WHERE LoaiKyNang <> 'Ngôn ngữ lập trình';
-- 41. Display company name and field of operation, sorted by field.
SELECT TenCongTy, LinhVuc FROM CongTy ORDER BY LinhVuc;
-- 42. Display name and major of male experts with more than 5 years of experience.
SELECT HoTen, ChuyenNganh FROM ChuyenGia WHERE GioiTinh = 'Nam' AND NamKinhNghiem > 5;
-- 43. List all experts in the database.
SELECT * FROM ChuyenGia;
-- 44. Display name and email of all female experts.
SELECT HoTen, Email FROM ChuyenGia WHERE GioiTinh = 'Nữ';
-- 45. List all companies and their number of employees, sorted by number of employees in descending order.
SELECT TenCongTy, SoNhanVien FROM CongTy ORDER BY SoNhanVien DESC;
-- 46. Display all projects with status 'Đang thực hiện'.
SELECT * FROM DuAn WHERE TrangThai = 'Đang thực hiện';
-- 47. List all skills of type 'Ngôn ngữ lập trình'.
SELECT * FROM KyNang WHERE LoaiKyNang = 'Ngôn ngữ lập trình';
-- 48. Display name and major of experts with more than 8 years of experience.
SELECT HoTen, ChuyenNganh FROM ChuyenGia WHERE NamKinhNghiem > 8;
-- 49. List all projects of the company with CompanyID = 1.
SELECT TenDuAn FROM DuAn WHERE MaCongTy = 1;
-- 50. Count the number of experts in each major.
SELECT ChuyenNganh, COUNT(*) AS SoLuongChuyenGia
FROM ChuyenGia
GROUP BY ChuyenNganh;
-- 51. Find the expert with the highest number of years of experience.
SELECT HoTen, NamKinhNghiem
FROM ChuyenGia
ORDER BY NamKinhNghiem DESC
LIMIT 1;
-- 52. List total number of employees for each company with more than 100 employees. Sort results by number of employees in ascending order.
SELECT TenCongTy, SoNhanVien
FROM CongTy
WHERE SoNhanVien > 100
ORDER BY SoNhanVien ASC;
-- 53. Determine the number of projects each company is participating in that have the status 'Đang thực hiện'. Only include companies with more than one such project. Sort results by number of projects in descending order.
SELECT ct.TenCongTy, COUNT(*) AS SoDuAnDangThucHien
FROM DuAn da
JOIN CongTy ct ON da.MaCongTy = ct.MaCongTy
WHERE da.TrangThai = 'Đang thực hiện'
GROUP BY ct.MaCongTy, ct.TenCongTy
HAVING COUNT(*) > 1
ORDER BY SoDuAnDangThucHien DESC;
-- 54. Find skills where experts have a level of 4 or higher and count the total number of experts per skill. Only include skills with more than 2 experts. Sort results by skill name in ascending order.
SELECT k.TenKyNang, COUNT(*) AS SoChuyenGia
FROM ChuyenGia_KyNang ck
JOIN KyNang k ON ck.MaKyNang = k.MaKyNang
WHERE ck.CapDo >= 4
GROUP BY k.MaKyNang, k.TenKyNang
HAVING COUNT(*) > 2
ORDER BY k.TenKyNang ASC;
-- 55. List names of companies in the field of 'Điện toán đám mây' and calculate their total number of employees. Sort results by total employees in ascending order.
SELECT TenCongTy, SoNhanVien
FROM CongTy
WHERE LinhVuc = 'Điện toán đám mây'
ORDER BY SoNhanVien ASC;
-- 56. List names of companies with 50 to 150 employees and calculate their average number of employees. Sort results by company name in ascending order.
WITH CongTyNhoVua AS (
    SELECT *
    FROM CongTy
    WHERE SoNhanVien BETWEEN 50 AND 150
),
TrungBinh AS (
    SELECT AVG(SoNhanVien) AS TrungBinhNhanVien FROM CongTyNhoVua
)

SELECT c.TenCongTy, c.SoNhanVien, t.TrungBinhNhanVien
FROM CongTyNhoVua c
JOIN TrungBinh t;
-- 57. Determine the number of skills for each expert who has at least one skill with the maximum level of 5. Only include those experts. Sort results by expert name in ascending order.
SELECT cg.HoTen, COUNT(ck.MaKyNang) AS SoKyNang
FROM ChuyenGia cg
JOIN ChuyenGia_KyNang ck ON cg.MaChuyenGia = ck.MaChuyenGia
WHERE cg.MaChuyenGia IN (
    SELECT MaChuyenGia
    FROM ChuyenGia_KyNang
    WHERE CapDo = 5
)
GROUP BY cg.MaChuyenGia, cg.HoTen
ORDER BY cg.HoTen ASC;
-- 58. List skill names where experts have a level of 4 or higher and count the total number of experts per skill. Only include skills with more than 2 experts. Sort results by skill name in ascending order.
SELECT k.TenKyNang, COUNT(*) AS SoChuyenGia
FROM ChuyenGia_KyNang ck
JOIN KyNang k ON ck.MaKyNang = k.MaKyNang
WHERE ck.CapDo >= 4
GROUP BY k.MaKyNang, k.TenKyNang
HAVING COUNT(*) > 2
ORDER BY k.TenKyNang ASC;
-- 59. Find names of experts in the field of 'Phát triển phần mềm' and calculate their average skill level. Only include those with an average level greater than 3. Sort results by average level in descending order.
SELECT cg.HoTen, AVG(ck.CapDo) AS DiemTrungBinh
FROM ChuyenGia cg
JOIN ChuyenGia_KyNang ck ON cg.MaChuyenGia = ck.MaChuyenGia
WHERE cg.ChuyenNganh = 'Phát triển phần mềm'
GROUP BY cg.MaChuyenGia, cg.HoTen
HAVING AVG(ck.CapDo) > 3
ORDER BY DiemTrungBinh DESC;
