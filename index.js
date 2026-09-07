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
            "SOFTWARE_PAY_URL": `${myServer}/payPage/pay/cloudpay`,
            "SOFTWARE_PLANS_URL": `${myServer}/hot_list/home`,
            "MUCAR_RESET": `${myServer}/hot_list/home?channel=MuCar&a=1`,
            "Thinkdiag_Reset": `${myServer}/hot_list/home?channel=ThinkDiag&a=1`,
            "Ediag_software": `${myServer}/hot_list/home?a=1&identification=Goods_1&isFiltering=1`,
            "DIAG_GPT_URL": `${myServer}/ai_h5/thinkDiagGpt?theme=diag`,
            "DIAG_FCRM_URL": `${myServer}/fcrm/home?theme=dollarfix&appSource=4&`,
            "DIAG_HELP_URL": `${myServer}/vueh5/diag/hfdetail`,
            "DIAG_SERVICE_URL": `${myServer}/serviceIm/app/view`,
            "DIAG_FAQ_URL": `${myServer}/vueh5/document/faq`,
            "DIAG_DIAG_HELP_URL": `${myServer}/vueh5/online/88`,
            "DIAG_CONTACT_US_URL": `${myServer}/contactus`,
            "DIAG_REDEEM_URL": `${myServer}/vueh5/diag/mailcenter`,
            "DIAG_POINTS_URL": `${myServer}/vueh5/diag/mall?identification=DIAG_HOT_LIST`,
            "DIAG_INVITE_URL": `${myServer}/vueh5/vueh5/diag/invite`,
            "DIAG_ACTIVATE_SN_URL": `${myServer}/vueh5/diag/mainpage`,
            "DIAG_MEMBER_RECORD_URL": `${myServer}/vueh5/diag/record`,
            "SOFTWARE_DETAIL_H5": `${myServer}/community_app/mallDetailsNew?shop_id=1&identification=softwareDetailsEventPage&label=SOFT_TYPE_1`,
            "RESET_DETAIL_H5": `${myServer}/community_app/mallDetailsNew?shop_id=1&identification=softwareDetailsEventPage&label=SOFT_TYPE_2`,
            "VIN_RESET_DETAIL_H5": `${myServer}/community_app/mallDetailsNew?shop_id=1&identification=softwareDetailsEventPage&label=SOFT_TYPE_2`,
            "ORDER_LIST_DETAIL_H5": `${myServer}/community_app/orderList`,
            "VIN_DETAIL_H5": `${myServer}/community_app/mallDetailsNew?shop_id=1&identification=softwareDetailsEventPage&label=SOFT_TYPE_1`,
            "AI_VEHICLE": `${myServer}/ai_h5/valueAssessment`,
            "EXCELLENT_PRODUCT_DETAIL_H5": `${myServer}/excellent_list/productDetail`,
            "COMBINATION_PRODUCT_DETAIL_H5": `${myServer}/combination_list/productDetail`,
            "DIAG_INTEGRAL_CENTER_H5": `${myServer}/vueh5/diag/integralCenter?identification=DOLLARFIX_POINT_SHOP`,
            "COMBINATION_LIST_H5": `${myServer}/combination_list/home`,
            "HOT_PRODUCT_DETAIL_H5": `${myServer}/hot_list/productDetail`,
            "COMMUNITY_MALL_LIST_H5": `${myServer}/community_app/mallList`,
            "DIAGNOSTIC_LIST_H5": `${myServer}/diagnostic_list/home`,
            "DIAG_INTEGRAL_MALL_H5": `${myServer}/vueh5/diag/integralMall?identification=DOLLARFIX_POINT_SHOP`,
            "MALL_DETAILS_H5": `${myServer}/mall/details`,
            "LUCKY_POINTS_H5": `${myServer}/luckypoints`,
            "NEW_LUCKY_POINTS_H5": `${myServer}/newLuckyPointsDollarfix`,
            "PRIVATE_TEST_LAB_H5": `${myServer}/community_app/privateTestLaboratory`,
            "REPORT_LIST_H5": `${myServer}/community_app/reportList`,
            "PULL_IN_FISSION_H5": `${myServer}/community_app/pullInFission`,
            "CAR_CALLBACK_HOME_H5": `${myServer}/car_callback/home`,
            "CAR_SECURITY_RATING_H5": `${myServer}/car_callback/security_rating`,
            "FAULT_LIGHT_LIST_H5": `${myServer}/maintenance_database/fault_light/list`,
            "DIAG_INTEGRAL_RULE_H5": `${myServer}/vueh5/diag/integralRule`,
            "COMMUNITY_PROTOCOL_H5": `${myServer}/vueh5/diag/communityBuildingProtocol`,
            "AI_PREDICTION": `${myServer}/ai_h5/comprehensiveFault`,
            "GATEWAY_CENTER_URL": `${myServer}/commonPage/gwai/gatewayAdministration?channel=fcaGateway`,
            "GATEWAY_VAG_URL": `${myServer}/shopPage/gateway?channel=VAG&good_id=291&identification=VAG`,
            "GATEWAY_BENZ_URL": `${myServer}/shopPage/gateway?channel=BENZ_URL&good_id=290&identification=BENZ_URL`,
            "GATEWAY_RENAULT_URL": `${myServer}/shopPage/gateway?channel=renaultGateway&good_id=85,86,87,88&identification=renaultGateway`,
            "GATEWAY_FCA_URL": `${myServer}/m/FCA_describe?channel=FCA_describe&good_id=174&identification=FCA_describe`,
            "MY_COUPONS_LIST_URL": `${myServer}/community_app/myCoupons`,
            "AI_ANALYSE": `${myServer}/ai_h5/predictionAnalyse`,
            "AI_REPAIR": `${myServer}/ai_h5/aiRepairEstimate`,
            "AI_PLAN": `${myServer}/ai_h5/maintenancePlan`,
            "AI_FUNCTION_EQUITY": `${myServer}/ai_h5/aiFunctionEquity`
        },
        "time": Math.floor(Date.now() / 1000),
        "ip": "127.0.0.1"

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
