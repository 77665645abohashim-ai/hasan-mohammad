const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// إعدادات الوسيطات الأساسية
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // لدعم قراءة بيانات نموذج تسجيل الدخول المرسلة من التطبيق
app.use(morgan('dev'));

// مسار التحقق الأساسي
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'السيرفر يعمل وجاهز لتوجيه طلبات التطبيق بنجاح!'
    });
});

// 1. مسار تسجيل الدخول (POST /api/login)
app.post('/api/login', (req, res) => {
    const { user_name, password } = req.body;
    
    // يمكنك هنا طباعة البيانات المرسلة للاطلاع عليها
    console.log('محاولة تسجيل دخول لـ:', user_name);

    res.status(200).json({
        data: {
            "access_token": "eyJ0eXAiOiJqd3QifQ.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cDpcL1wvOiIsImV4cCI6MzA1MDI4ODUzNSwiaWF0IjoxNzg4ODQ4NTM1LCJuYmYiOjE3ODg4NDg1MzUsInVpZCI6NDgwMzkzMiwicyI6InBobmFYciIsImp0aSI6ImQ3YTNmYWM1MzJhNjNmODlkMmVkNDEwZjlhYmM0YTlmIn0.8aYhNP83mCgk7vx1JgqnyWvgCnRiC43Q5z7mN_oPSQ8",
            "token_type": "Bearer",
            "goloToken": "A473277A8372D6D5C4B9C174678094F5pfvx",
            "cc": "505371899",
            "user_id": 4803932,
            "name": user_name ? user_name.split('@')[0] : "yfkhgfhh",
            "contact_way": "",
            "refresh_ttl": 604800,
            "api_cloud": "https://hasan-mohammad.onrender.com",
            "api_download": "https://hasan-mohammad.onrender.com",
            "avatar": ""
        },
        code: 0,
        message: "success",
        time: Math.floor(Date.now() / 1000)
    });
});

// 2. مسار إعدادات التطبيق (GET /api/app_config)
app.get('/api/app_config', (req, res) => {
    const myServer = 'https://hasan-mohammad.onrender.com';

    res.status(200).json({
        code: 0,
        message: "success",
        data: {
            "VIP_URL": `${myServer}/vip`,
            "SOFTWARE_PAY_URL": `${myServer}/pay`,
            "SOFTWARE_PLANS_URL": `${myServer}/plans`,
            "MUCAR_RESET": `${myServer}/mucar_reset`,
            "Thinkdiag_Reset": `${myServer}/thinkdiag_reset`,
            "Ediag_software": `${myServer}/ediag`,
            "DIAG_GPT_URL": `${myServer}/ai/gpt`,
            "DIAG_FCRM_URL": `${myServer}/fcrm`,
            "DIAG_HELP_URL": `${myServer}/help`,
            "DIAG_SERVICE_URL": `${myServer}/service`,
            "DIAG_FAQ_URL": `${myServer}/faq`,
            "DIAG_DIAG_HELP_URL": `${myServer}/diag_help`,
            "DIAG_CONTACT_US_URL": `${myServer}/contact`,
            "DIAG_REDEEM_URL": `${myServer}/redeem`,
            "DIAG_POINTS_URL": `${myServer}/points`,
            "DIAG_INVITE_URL": `${myServer}/invite`,
            "DIAG_ACTIVATE_SN_URL": `${myServer}/activate`,
            "DIAG_MEMBER_RECORD_URL": `${myServer}/record`,
            "SOFTWARE_DETAIL_H5": `${myServer}/software_detail`,
            "RESET_DETAIL_H5": `${myServer}/reset_detail`,
            "VIN_RESET_DETAIL_H5": `${myServer}/vin_reset_detail`,
            "ORDER_LIST_DETAIL_H5": `${myServer}/orders`,
            "VIN_DETAIL_H5": `${myServer}/vin_detail`,
            "AI_VEHICLE": `${myServer}/ai/vehicle`,
            "EXCELLENT_PRODUCT_DETAIL_H5": `${myServer}/product/excellent`,
            "COMBINATION_PRODUCT_DETAIL_H5": `${myServer}/product/combination`,
            "DIAG_INTEGRAL_CENTER_H5": `${myServer}/integral/center`,
            "COMBINATION_LIST_H5": `${myServer}/combination/list`,
            "HOT_PRODUCT_DETAIL_H5": `${myServer}/product/hot`,
            "COMMUNITY_MALL_LIST_H5": `${myServer}/mall/list`,
            "DIAGNOSTIC_LIST_H5": `${myServer}/diagnostic/list`,
            "DIAG_INTEGRAL_MALL_H5": `${myServer}/integral/mall`,
            "MALL_DETAILS_H5": `${myServer}/mall/details`,
            "LUCKY_POINTS_H5": `${myServer}/luckypoints`,
            "NEW_LUCKY_POINTS_H5": `${myServer}/new_luckypoints`,
            "PRIVATE_TEST_LAB_H5": `${myServer}/lab`,
            "REPORT_LIST_H5": `${myServer}/reports`,
            "PULL_IN_FISSION_H5": `${myServer}/fission`,
            "CAR_CALLBACK_HOME_H5": `${myServer}/car/callback`,
            "CAR_SECURITY_RATING_H5": `${myServer}/car/security`,
            "FAULT_LIGHT_LIST_H5": `${myServer}/fault/lights`,
            "DIAG_INTEGRAL_RULE_H5": `${myServer}/integral/rule`,
            "COMMUNITY_PROTOCOL_H5": `${myServer}/protocol`,
            "AI_PREDICTION": `${myServer}/ai/prediction`,
            "GATEWAY_CENTER_URL": `${myServer}/gateway/center`,
            "GATEWAY_VAG_URL": `${myServer}/gateway/vag`,
            "GATEWAY_BENZ_URL": `${myServer}/gateway/benz`,
            "GATEWAY_RENAULT_URL": `${myServer}/gateway/renault`,
            "GATEWAY_FCA_URL": `${myServer}/gateway/fca`,
            "MY_COUPONS_LIST_URL": `${myServer}/coupons`,
            "AI_ANALYSE": `${myServer}/ai/analyse`,
            "AI_REPAIR": `${myServer}/ai/repair`,
            "AI_PLAN": `${myServer}/ai/plan`,
            "AI_FUNCTION_EQUITY": `${myServer}/ai/equity`
        },
        time: Math.floor(Date.now() / 1000),
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || "127.0.0.1"
    });
});

// معالجة المسارات غير الموجودة (404)
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'المسار غير موجود على سيرفرك'
    });
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
