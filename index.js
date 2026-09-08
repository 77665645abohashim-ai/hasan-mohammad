const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// إعدادات الوسيطات الأساسية
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// مسار تجريبي (GET) للتحقق من عمل السيرفر
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'السيرفر يعمل وجاهز لاستقبال طلبات التطبيق!'
    });
});

// المسار المخصص لاستقبال طلبات التطبيق (POST)
app.post('/api/data', (req, res) => {
    const dataFromApp = req.body;
    
    // يمكنك معالجة البيانات هنا
    console.log('البيانات المستلمة:', dataFromApp);

    res.status(200).json({
        success: true,
        message: 'تم استلام البيانات بنجاح في السيرفر',
        receivedData: dataFromApp
    });
});

// معالجة المسارات غير الموجودة
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'المسار غير موجود'
    });
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
