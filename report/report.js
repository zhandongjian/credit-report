function getDetail() {
    setTimeout(function () {
        $('#showloading').hide();
        $('#showDemo').hide();
        $('#showdetail').show();
    }, 100);

    // ajax返回数据
    var jsonResult = {
        "data": {
            "address": "湖北省/襄樊市/襄阳县",
            "id": 36,
            "idCard": "420621198503099460",
            "idCardCorrelatedPhonesCount": 0,
            "idCardCorrelatedPhonesDetail": "[]",
            "isFakePhone": 2,
            "isHarassPhone": 2,
            "isHightRiskIdCardBlacklist": 2,
            "isHightRiskPhoneBlacklist": 2,
            "isInternetLoadPhoneBlacklist": 2,
            "isInternetLoanIdCardBlacklist": 2,
            "isLawRisk": "1",
            "isOverdue": 1,
            "isOverdueHistoryIdCard": 1,
            "isSometimeLoans": 2,
            "lawRiskDetail": [
                {
                    "isHit": "1", "riskId": "idcard_hit_court_dishonesty", "riskName": "身份证命中法院失信被执行人",
                    "detailModelList": [
                        {
                            "entityName": '张三',//被执行人的名字
                            "publishDate": '2019-09-01',//公布时间
                            "status": '异议中',//状态
                            "courtNam": '法院名称'//法院名称
                        },
                        {
                            "entityName": '张三',//被执行人的名字
                            "publishDate": '2019-09-02',//公布时间
                            "status": '已验证',//状态
                            "courtNam": '法院名称'//法院名称
                        }
                    ]
                },
                { "isHit": "2", "riskId": "idcard_hit_court_executed", "riskName": "身份证命中法院被执行人" },
                { "isHit": "2", "riskId": "idcard_hit_crime", "riskName": "身份证命中犯罪通缉名单" },
                {
                    "isHit": "1", "riskId": "hit_break_law", "riskName": "疑似涉黄涉恐行为",
                    "detailModelList": [
                        {
                            "entityName": '张三',//被执行人的名字
                            "publishDate": '2019-09-01',//公布时间
                            "status": '异议中',//状态
                            "courtNam": '法院名称'//法院名称
                        },
                        {
                            "entityName": '张三',//被执行人的名字
                            "publishDate": '2019-09-02',//公布时间
                            "status": '已验证',//状态
                            "courtNam": '法院名称'//法院名称
                        }
                    ]
                },
                { "isHit": "2", "riskId": "hit_cheat_loan", "riskName": "疑似存在骗贷行为" },
                { "isHit": "2", "riskId": "hit_infomation_forge", "riskName": "疑似身份信息不符" }
            ],
            "loanPlatformCheckDetailJson": [
                { "loanCount15d": 0, "loanCount180d": 3, "loanCount30d": 0, "loanCount90d": 3, "orgCount": 0, "orgType": "CASH_LOAN", "orgTypeName": "现金贷" },
                { "loanCount15d": 1, "loanCount180d": 2, "loanCount30d": 1, "loanCount90d": 2, "orgCount": 0, "orgType": "CONSUMSTAGE", "orgTypeName": "消费分期" }],

            "name": "王国青",
            "overdueDetail": [
                { "overdueDate": 1567267200000, "overdueMaxTimess": "M0", "overdueMoney": "1000-2000", "overdueStatus": "未结清", "overdueUpdateDate": "2019-09" }
            ],
            "phone": "15112338336",
            "requestId": "0000000",
            "riskIndex": 70,
            "riskSuggest": "复查",

            "threeMonthPayMoney": '1000',
            "threeMonthPayCount": '3',
            "lastPayTime": '2019-07-08',
            "maximumPayMoney": '5000',
            "isSometimeLoans": '1',

            "overdueMaxTimes": '45',
            "threeMonthOverdueMoney": "1000",
            "lastOverdueTime": "2019-09-01",
            "threeMonthOverdueCount": "1",
            "threeMonthOverduePlatform": '5',
            "maximumOverdueMoney": "1000-2000",
            "isMeanwhileOverduePlatform": 2,

            "unitId": "99999",
            "userId": "3333",
            "passRate": '15',
            "age": '18',
            "sex": '1',
            "createTime": '2019/09/09 12:23',
            "idCardCorrelatedPhonesDetail": '13266661111,13266662222,13266663333',
            "idCardCorrelatedEmails": '11@1.com,22@2.com',
            "idCardCorrelatedCompanyAddress": 'XXX街道1,XX街道2,XX街道3',
            "phoneCorrelatedIdCards": '4415555526737,121231343413,3454524543532'
        },
        "code": "1",
        "msg": "成功"
    }

    var detail = jsonResult.data;

    $('#score').html(detail.riskIndex); // 评分
    $('#state').html('健康'); // 状态：健康，中等，偏高

    // 风险列表：根据内容加载列表 <p>XX</p>
    var riskHtml = '';
    for (var i = 0; i < detail.lawRiskDetail.length; i++) {
        riskHtml = riskHtml + '<p>' + detail.lawRiskDetail[i].riskName + '</p>';
    }
    $('#riskList').html(riskHtml);

    // 网贷申请通过率 修改文案： 88 及 网贷贵宾，万般拥戴
    var passPercentHtml = '<span>' + detail.passRate + '</span><span class="fuHao">%</span>';
    // var passPercentHtml = '<span>' + detail.passRate + '</span><span class="fuHao">%</span>网贷贵宾，万般拥戴';

    $('#passPercent').html(passPercentHtml);

    // 用户信息
    $('#usrName').html(detail.name); // 注意脱敏
    $('#usrAge').html(detail.age + '岁'); // 注意转义
    $('#usrSex').html(detail.sex == 1 ? '男性' : '女性'); // 注意转义
    $('#usrAdr').html(detail.address);
    $('#usrID').html(detail.idCard); // 注意脱敏
    $('#usrNbr').html('NO.' + detail.requestId);
    $('#reportDate').html(detail.createTime); // 注意转义

    // 是否命中信贷逾期风险
    var isOverdue = detail.isOverdue;//1是 2否
    var isOverdueTxt = isOverdue == 1 ? '是' : '否';
    $('#isOverdue').html(isOverdueTxt);
    if (isOverdue == '1') {
        var isOverdueTbody = ''; // 循环构造出tr
        for (var i = 0; i < detail.overdueDetail.length; i++) {
            isOverdueTbody = isOverdueTbody + '<tr><td>' + detail.overdueDetail[i].overdueUpdateDate + '</td><td>¥' + detail.overdueDetail[i].overdueMoney + '</td><td>' + detail.overdueDetail[i].overdueMaxTimess + '</td><td>' + detail.overdueDetail[i].overdueStatus + '</td></tr>'
        }
        $('#isOverdueTable').show();
        // 添加表格数据
        $('#isOverdueTbody').html(isOverdueTbody);
    } else {
        $('#isOverdueTable').hide();
    }

    // 不良信息风险
    if (detail.isLawRisk == '1') {
        //显示不良信息风险
        var isLawHtml = '';
        for (var i = 0; i < detail.lawRiskDetail.length; i++) {
            var wIsHit = detail.lawRiskDetail[i].isHit == '1' ? '是' : '否';
            isLawHtml = isLawHtml +
                '<div class="wrapper">' +
                '<p class="title-area">' +
                '<span class="title colorOrange">' + detail.lawRiskDetail[i].riskName + '：</span>' +
                '<span class="content colorOrange">' + wIsHit + '</span>' +
                '</p>';

            if (detail.lawRiskDetail[i].isHit == '1') {
                for (var j = 0; j < detail.lawRiskDetail[i].detailModelList.length; j++) {
                    isLawHtml = isLawHtml +
                        '<div class="details">' +
                        '<div style="padding-bottom: 15px;">' +
                        '<div class="wrapper single">' +
                        '<p class="title-area">' +
                        '<span class="title">被执行人：</span>' +
                        '<span class="content">' + detail.lawRiskDetail[i].detailModelList[j].entityName + '</span>' +
                        '</p>' +
                        '</div>' +
                        '<div class="wrapper single">' +
                        '<p class="title-area">' +
                        '<span class="title">时间：</span>' +
                        '<span class="content">' + detail.lawRiskDetail[i].detailModelList[j].publishDate + '</span>' +
                        '</p>' +
                        '</div>' +
                        '<div class="wrapper single">' +
                        '<p class="title-area">' +
                        '<span class="title">验证状态：</span>' +
                        '<span class="content">' + detail.lawRiskDetail[i].detailModelList[j].status + '</span>' +
                        '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }
            }
            isLawHtml = isLawHtml + '</div>';
        }
        $('#isLawRisk').html(isLawHtml).show();
    } else {
        $('#isLawRisk').hide();
    }

    // 借贷和还款检测
    $('#threeMonthPayCount').html(detail.threeMonthPayCount); // 或返回无记录
    $('#threeMonthPayMoney').html('¥' + detail.threeMonthPayMoney); // 或返回无记录
    $('#lastPayTime').html(detail.lastPayTime); // 或返回无记录
    $('#maximumPayMoney').html('¥' + detail.maximumPayMoney); // 或返回无记录
    $('#isSometimeLoans').html(detail.isSometimeLoans == '1' ? '是' : '否'); // 或返回无记录

    // 逾期行为检测
    $('#overdueMaxTimes').html(detail.overdueMaxTimes + '天'); // 或返回无记录
    $('#threeMonthOverdueCount').html(detail.threeMonthOverdueCount); // 或返回无记录
    $('#threeMonthOverdueMoney').html('¥' + detail.threeMonthOverdueMoney); // 或返回无记录
    $('#threeMonthOverduePlatform').html(detail.threeMonthOverduePlatform); // 或返回无记录
    $('#lastOverdueTime').html(detail.lastOverdueTime); // 或返回无记录
    $('#maximumOverdueMoney').html('¥' + detail.maximumOverdueMoney); // 或返回无记录
    $('#isMeanwhileOverduePlatform').html(detail.isMeanwhileOverduePlatform == '1' ? '是' : '否'); // 或返回无记录

    // 网贷风险检测
    $('#isInternetLoanIdCardBlacklist').html(detail.isInternetLoanIdCardBlacklist == '1' ? '是' : '否');
    $('#isInternetLoadPhoneBlacklist').html(detail.isInternetLoadPhoneBlacklist == '1' ? '是' : '否');
    $('#isHightRiskIdCardBlacklist').html(detail.isHightRiskIdCardBlacklist == '1' ? '是' : '否');
    $('#isHightRiskPhoneBlacklist').html(detail.isHightRiskPhoneBlacklist == '1' ? '是' : '否');
    $('#isOverdueHistoryIdCard').html(detail.isOverdueHistoryIdCard == '1' ? '是' : '否');
    $('#isLessPhone').html(detail.isLessPhone == '1' ? '是' : '否');
    $('#isFakePhone').html(detail.isFakePhone == '1' ? '是' : '否');
    $('#isHarassPhone').html(detail.isHarassPhone == '1' ? '是' : '否');

    // 关联信息检测
    $('#idCardCorrelatedPhonesCount').html(detail.idCardCorrelatedPhonesCount);
    var phoneList = detail.idCardCorrelatedPhonesDetail.split(',');
    var phoneListHtml = '';
    for (var i = 0; i < phoneList.length; i++) {
        phoneListHtml = phoneListHtml + '<p class="detail-item">' + phoneList[i] + '</p>';
    }
    $('#idCardCorrelatedPhonesDetail').html(phoneListHtml);

    $('#idCardCorrelatedEmailCount').html(detail.idCardCorrelatedEmailCount);
    var emilList = detail.idCardCorrelatedEmails.split(',');
    var emilListHtml = '';
    for (var i = 0; i < emilList.length; i++) {
        emilListHtml = emilListHtml + '<p class="detail-item">' + emilList[i] + '</p>';
    }
    $('#idCardCorrelatedEmails').html(emilListHtml);

    $('#idCardCorrelatedCompanyAddressCount').html(detail.idCardCorrelatedCompanyAddressCount);
    var addrList = detail.idCardCorrelatedCompanyAddress.split(',');
    var addrListHtml = '';
    for (var i = 0; i < addrList.length; i++) {
        addrListHtml = addrListHtml + '<p class="detail-item">' + addrList[i] + '</p>';
    }
    $('#idCardCorrelatedCompanyAddress').html(addrListHtml);

    $('#phoneCorrelatedIdCardCount').html(detail.phoneCorrelatedIdCardCount);
    $('#idCardCorrelatedCompanyAddressCount').html(detail.idCardCorrelatedCompanyAddressCount);
    var idList = detail.phoneCorrelatedIdCards.split(',');
    var idListHtml = '';
    for (var i = 0; i < idList.length; i++) {
        idListHtml = idListHtml + '<p class="detail-item">' + idList[i] + '</p>';
    }
    $('#phoneCorrelatedIdCards').html(idListHtml);
    // $('#').html(detail. == '1' ? '是' : '否');

    // 多平台借贷检测
    var platformCheckHtml = '';
    for (var i = 0; i < detail.loanPlatformCheckDetailJson.length; i++) {
        platformCheckHtml = platformCheckHtml +
            '<tr><td>' + detail.loanPlatformCheckDetailJson[i].orgTypeName +
            '</td><td>' + detail.loanPlatformCheckDetailJson[i].loanCount15d +
            '</td><td>' + detail.loanPlatformCheckDetailJson[i].loanCount30d +
            '</td><td>' + detail.loanPlatformCheckDetailJson[i].loanCount90d +
            '</td><td>' + detail.loanPlatformCheckDetailJson[i].loanCount180d +'</td></tr>'
    }
    $('#loanPlatformCheckDetailJson').html(platformCheckHtml);




}

getDetail();