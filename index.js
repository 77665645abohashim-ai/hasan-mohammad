const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. الوسيطات (Middlewares)
app.use(cors()); // السماح بالاتصال الخارجي
app.use(express.json()); // قراءة JSON
app.use(morgan('dev')); // لتسجيل الطلبات في الـ Terminal

// 2. المسارات الرئيسية (Routes)
app.use('/api/v1', apiRoutes);

// 3. معالجة المسارات غير الموجودة (404 Not Found)
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'عذراً، المسار المطلوب غير موجود على الخادم'
    });
});

// 4. معالجة الأخطاء العامة (Error Handling Middleware)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'حدث خطأ داخلي في الخادم'
    });
});

// 5. تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 Server is running cleanly on port ${PORT}`);
});
