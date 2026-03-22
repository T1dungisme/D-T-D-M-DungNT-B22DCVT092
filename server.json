const express = require('express');
const mongoose = require('mongoose'); // Thêm thư viện kết nối Database
const app = express();
const port = 80;

app.use(express.json());
app.use(express.static('my-website'));

// ==============================================================
// KẾT NỐI VỚI CƠ SỞ DỮ LIỆU ĐÁM MÂY (MONGODB ATLAS - PaaS)
// ==============================================================
// Thay <password> bằng mật khẩu bạn đã tạo ở Bước 1

const dbURI = 'mongodb+srv://admin:Dung19102004@webtienganh.x8to0uc.mongodb.net/tienganh_db?appName=WebTiengAnh';

mongoose.connect(dbURI)
  .then(() => console.log('Da ket noi thanh cong voi Database tren Cloud!'))
  .catch((err) => console.log('Loi ket noi Database:', err));

// Định nghĩa cấu trúc Bảng lưu tài khoản (Schema)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// ==============================================================
// 1. API ĐĂNG KÝ (Lưu thẳng vào MongoDB)
// ==============================================================
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Kiểm tra xem tài khoản đã tồn tại trong DB chưa
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ msg: "Tên đăng nhập hoặc Email đã được sử dụng!" });
        }

        // Lưu user mới vào DB
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(200).json({ msg: "Đăng ký thành công!" });
    } catch (error) {
        res.status(500).json({ msg: "Lỗi Server" });
    }
});

// ==============================================================
// 2. API ĐĂNG NHẬP (Truy vấn từ MongoDB)
// ==============================================================
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Tìm user trong DB
        const user = await User.findOne({ username, password });

        if (user) {
            res.status(200).json({
                message: "Đăng nhập thành công",
                token: "azure-real-db-token-" + Math.random(),
                username: user.username
            });
        } else {
            res.status(401).json({ message: "Tên đăng nhập hoặc mật khẩu không chính xác!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Lỗi Server" });
    }
});

app.listen(port, () => {
    console.log(`Web server đang chay tren port ${port}...`);
});
