const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// مسار التحقق من الإشعارات والتنبيهات
app.get('/api/notice/unread', (req, res) => {
    res.json({
        "code": 0,
        "message": "success",
        "data": {
            "unread_count": 0
        }
    });
});

// مسار جلب قائمة السوفتوير والبرمجيات للسيارات
app.get('/api/v2/device/getSoftwareList', (req, res) => {
    res.json({
        "code": 0,
        "message": "success",
        "data": [
            {
                "softPackageID": "DEMO",
                "softName": "Demo",
                "versionNo": "V10.66",
                "downloadLink": "https://downloadapp.mythinkcar.com/app_soft/DEMO/2/V10.66/Arabic/DEMO_THINKDIAG1_V10.66_AR.zip",
                "zyVersion": "V15.56",
                "isNewPath": 0,
                "versionDetailId": 2654,
                "softUpdateTime": 1722304322667,
                "softApplicableAreaId": 10,
                "lanType": "Arabic",
                "lanId": "12",
                "availableEndTime": null
            }
        ],
        "reset_select_number": 0,
        "model_select_number": 0,
        "softProductList": {
            "s": 0
        }
    });
});

// مسار إعدادات وتوجيه الروابط الخاصة بالتطبيق
app.get('/api/app_config', (req, res) => {
    const myServer = "https://hasan-mohammad.onrender.com";
    res.json({
        "code": 0,
        "message": "success",
        "data": {
            "VIP_URL": `${myServer}/vip_pay/home_new?identification=vipPage&filter_user_group=1`,
            "SOFTWARE_PAY_URL": `${myServer}/pay/cloudpay`
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
