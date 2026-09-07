const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// وسيط لمراقبة وطباعة جميع الطلبات الواردة في الـ Logs لتراها بوضوح
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

// الصفحة الرئيسية للتأكد من أن السيرفر يعمل
app.get('/', (req, res) => {
  res.send('Server is running successfully on Render!');
});

// 1. مسار تفعيل الجهاز (حسب رابط ApiConfig)
app.post('/api/device/active', (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    message: 'Device activated successfully',
    data: {
      is_active: true,
      expire_date: '2030-12-31'
    }
  });
});

// 2. فحص تجديد الاشتراك
app.get('/api/v2/user/isRenew', (req, res) => {
  res.json({
    status: 'success',
    isRenew: true, // true تعني أن الاشتراك مفعل
    message: 'Subscription is active'
  });
});

// 3. فحص كود التفعيل أو الدفع للجهاز
app.post('/api/v2/user/checkDeviceTcode', (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    message: 'Tcode verified successfully'
  });
});

// 4. مسار تسجيل الدخول أو المصادقة الأساسي
app.post('/api/v2/login', (req, res) => {
  res.json({
    status: 'success',
    message: 'Login successful',
    token: 'mock_token_123456789',
    user: {
      id: 1,
      name: 'User'
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
