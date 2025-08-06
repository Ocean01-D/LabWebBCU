CREATE DATABASE IF NOT EXISTS LAB2ITCS;
USE LAB2ITCS;

-- Tạo bảng Chuyên gia
CREATE TABLE ChuyenGia (
    MaChuyenGia INT PRIMARY KEY,
    HoTen VARCHAR(100),
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    Email VARCHAR(100),
    SoDienThoai VARCHAR(20),
    ChuyenNganh VARCHAR(50),
    NamKinhNghiem INT
);

-- Tạo bảng Công ty
CREATE TABLE CongTy (
    MaCongTy INT PRIMARY KEY,
    TenCongTy VARCHAR(100),
    DiaChi VARCHAR(200),
    LinhVuc VARCHAR(50),
    SoNhanVien INT
);

-- Tạo bảng Dự án
CREATE TABLE DuAn (
    MaDuAn INT PRIMARY KEY,
    TenDuAn VARCHAR(200),
    MaCongTy INT,
    NgayBatDau DATE,
    NgayKetThuc DATE,
    TrangThai VARCHAR(50),
    FOREIGN KEY (MaCongTy) REFERENCES CongTy(MaCongTy)
);

-- Tạo bảng Kỹ năng
CREATE TABLE KyNang (
    MaKyNang INT PRIMARY KEY,
    TenKyNang VARCHAR(100),
    LoaiKyNang VARCHAR(50)
);

-- Tạo bảng Chuyên gia - Kỹ năng
CREATE TABLE ChuyenGia_KyNang (
    MaChuyenGia INT,
    MaKyNang INT,
    CapDo INT,
    PRIMARY KEY (MaChuyenGia, MaKyNang),
    FOREIGN KEY (MaChuyenGia) REFERENCES ChuyenGia(MaChuyenGia),
    FOREIGN KEY (MaKyNang) REFERENCES KyNang(MaKyNang)
);

-- Tạo bảng Chuyên gia - Dự án
CREATE TABLE ChuyenGia_DuAn (
    MaChuyenGia INT,
    MaDuAn INT,
    VaiTro VARCHAR(50),
    NgayThamGia DATE,
    PRIMARY KEY (MaChuyenGia, MaDuAn),
    FOREIGN KEY (MaChuyenGia) REFERENCES ChuyenGia(MaChuyenGia),
    FOREIGN KEY (MaDuAn) REFERENCES DuAn(MaDuAn)
);

-- Chèn dữ liệu mẫu vào bảng Chuyên gia
INSERT INTO ChuyenGia (MaChuyenGia, HoTen, NgaySinh, GioiTinh, Email, SoDienThoai, ChuyenNganh, NamKinhNghiem)
VALUES 
(1, 'Nguyễn Văn An', '1985-05-10', 'Nam', 'nguyenvanan@email.com', '0901234567', 'Phát triển phần mềm', 10),
(2, 'Trần Thị Bình', '1990-08-15', 'Nữ', 'tranthiminh@email.com', '0912345678', 'An ninh mạng', 7),
(3, 'Lê Hoàng Cường', '1988-03-20', 'Nam', 'lehoangcuong@email.com', '0923456789', 'Trí tuệ nhân tạo', 9),
(4, 'Phạm Thị Dung', '1992-11-25', 'Nữ', 'phamthidung@email.com', '0934567890', 'Khoa học dữ liệu', 6),
(5, 'Hoàng Văn Em', '1987-07-30', 'Nam', 'hoangvanem@email.com', '0945678901', 'Điện toán đám mây', 8),
(6, 'Ngô Thị Phượng', '1993-02-14', 'Nữ', 'ngothiphuong@email.com', '0956789012', 'Phân tích dữ liệu', 5),
(7, 'Đặng Văn Giang', '1986-09-05', 'Nam', 'dangvangiang@email.com', '0967890123', 'IoT', 11),
(8, 'Vũ Thị Hương', '1991-12-20', 'Nữ', 'vuthihuong@email.com', '0978901234', 'UX/UI Design', 7),
(9, 'Bùi Văn Inh', '1989-04-15', 'Nam', 'buivaninch@email.com', '0989012345', 'DevOps', 8),
(10, 'Lý Thị Khánh', '1994-06-30', 'Nữ', 'lythikhanh@email.com', '0990123456', 'Blockchain', 4);

-- Chèn dữ liệu mẫu vào bảng Công ty
INSERT INTO CongTy (MaCongTy, TenCongTy, DiaChi, LinhVuc, SoNhanVien)
VALUES 
(1, 'TechViet Solutions', '123 Đường Lê Lợi, TP.HCM', 'Phát triển phần mềm', 200),
(2, 'DataSmart Analytics', '456 Đường Nguyễn Huệ, Hà Nội', 'Phân tích dữ liệu', 150),
(3, 'CloudNine Systems', '789 Đường Trần Hưng Đạo, Đà Nẵng', 'Điện toán đám mây', 100),
(4, 'SecureNet Vietnam', '101 Đường Võ Văn Tần, TP.HCM', 'An ninh mạng', 80),
(5, 'AI Innovate', '202 Đường Lý Tự Trọng, Hà Nội', 'Trí tuệ nhân tạo', 120);

-- Chèn dữ liệu mẫu vào bảng Dự án
INSERT INTO DuAn (MaDuAn, TenDuAn, MaCongTy, NgayBatDau, NgayKetThuc, TrangThai)
VALUES 
(1, 'Phát triển ứng dụng di động cho ngân hàng', 1, '2023-01-01', '2023-06-30', 'Hoàn thành'),
(2, 'Xây dựng hệ thống phân tích dữ liệu khách hàng', 2, '2023-03-15', '2023-09-15', 'Đang thực hiện'),
(3, 'Triển khai giải pháp đám mây cho doanh nghiệp', 3, '2023-02-01', '2023-08-31', 'Đang thực hiện'),
(4, 'Nâng cấp hệ thống bảo mật cho tập đoàn viễn thông', 4, '2023-04-01', '2023-10-31', 'Đang thực hiện'),
(5, 'Phát triển chatbot AI cho dịch vụ khách hàng', 5, '2023-05-01', '2023-11-30', 'Đang thực hiện');

-- Chèn dữ liệu mẫu vào bảng Kỹ năng
INSERT INTO KyNang (MaKyNang, TenKyNang, LoaiKyNang)
VALUES 
(1, 'Java', 'Ngôn ngữ lập trình'),
(2, 'Python', 'Ngôn ngữ lập trình'),
(3, 'Machine Learning', 'Công nghệ'),
(4, 'AWS', 'Nền tảng đám mây'),
(5, 'Docker', 'Công cụ'),
(6, 'Kubernetes', 'Công cụ'),
(7, 'SQL', 'Cơ sở dữ liệu'),
(8, 'NoSQL', 'Cơ sở dữ liệu'),
(9, 'React', 'Framework'),
(10, 'Angular', 'Framework');

-- Chèn dữ liệu mẫu vào bảng Chuyên gia - Kỹ năng
INSERT INTO ChuyenGia_KyNang (MaChuyenGia, MaKyNang, CapDo)
VALUES 
(1, 1, 5), (1, 7, 4), (1, 9, 3),
(2, 2, 4), (2, 3, 3), (2, 8, 4),
(3, 2, 5), (3, 3, 5), (3, 4, 3),
(4, 2, 4), (4, 7, 5), (4, 8, 4),
(5, 4, 5), (5, 5, 4), (5, 6, 4),
(6, 2, 4), (6, 3, 3), (6, 7, 5),
(7, 1, 3), (7, 2, 4), (7, 5, 3),
(8, 9, 5), (8, 10, 4),
(9, 5, 5), (9, 6, 5), (9, 4, 4),
(10, 2, 3), (10, 3, 3), (10, 8, 4);

-- Chèn dữ liệu mẫu vào bảng Chuyên gia - Dự án
INSERT INTO ChuyenGia_DuAn (MaChuyenGia, MaDuAn, VaiTro, NgayThamGia)
VALUES 
(1, 1, 'Trưởng nhóm phát triển', '2023-01-01'),
(2, 4, 'Chuyên gia bảo mật', '2023-04-01'),
(3, 5, 'Kỹ sư AI', '2023-05-01'),
(4, 2, 'Chuyên gia phân tích dữ liệu', '2023-03-15'),
(5, 3, 'Kiến trúc sư đám mây', '2023-02-01'),
(6, 2, 'Chuyên gia phân tích dữ liệu', '2023-03-15'),
(7, 3, 'Kỹ sư IoT', '2023-02-01'),
(8, 1, 'Nhà thiết kế UX/UI', '2023-01-01'),
(9, 3, 'Kỹ sư DevOps', '2023-02-01'),
(10, 5, 'Kỹ sư Blockchain', '2023-05-01');

SELECT * FROM ChuyenGia;
SELECT HoTen,Email FROM ChuyenGia;
SELECT TenCongTy,SoNhanVien FROM CongTy;
SELECT TenDuAn FROM DuAn WHERE TrangThai = 'Đang thực hiện';
SELECT TenKyNang, LoaiKyNang FROM KyNang;
SELECT HoTen, ChuyenNganh FROM ChuyenGia WHERE GioiTinh = 'Nam';
SELECT TenCongTy, LinhVuc FROM CongTy WHERE SoNhanVien > 150;
SELECT TenDuAn FROM DuAn WHERE YEAR(NgayBatDau) = 2023;
SELECT TenKyNang FROM KyNang WHERE LoaiKyNang = 'Công cụ';
SELECT HoTen,NamKinhNghiem FROM ChuyenGia WHERE NamKinhNghiem > 5;
SELECT TenCongTy, DiaChi FROM CongTy WHERE LinhVuc = 'Phát triển phần mềm';
SELECT TenDuAn FROM DuAn WHERE YEAR(NgayKetThuc) = 2023;
SELECT k.TenKyNang, c.CapDo
FROM ChuyenGia_KyNang c
JOIN KyNang k ON c.MaKyNang = k.MaKyNang;
SELECT MaChuyenGia, VaiTro FROM ChuyenGia_DuAn;
SELECT HoTen, NgaySinh FROM ChuyenGia WHERE YEAR(NgaySinh) >= 1990;
SELECT TenCongTy, SoNhanVien FROM CongTy ORDER BY SoNhanVien DESC;
SELECT TenDuAn, NgayBatDau FROM DuAn ORDER BY NgayBatDau ASC;
SELECT DISTINCT TenKyNang FROM KyNang;
SELECT HoTen, Email FROM ChuyenGia LIMIT 5;
SELECT TenCongTy FROM CongTy WHERE TenCongTy LIKE '%Tech%';
SELECT TenDuAn, TrangThai FROM DuAn WHERE TrangThai <> 'Hoàn thành';
SELECT HoTen, ChuyenNganh FROM ChuyenGia ORDER BY ChuyenNganh ASC, HoTen ASC;
SELECT TenCongTy, SoNhanVien FROM CongTy WHERE SoNhanVien BETWEEN 100 AND 200;
SELECT TenKyNang, LoaiKyNang FROM KyNang ORDER BY LoaiKyNang DESC, TenKyNang ASC;
SELECT HoTen, SoDienThoai FROM ChuyenGia WHERE Email LIKE '%email.com%';

















