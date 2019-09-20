function getDetail() {
    setTimeout(function () {
        $('#reportBody').removeClass('hideOverflow');
        $('#showloading').hide();
    }, 5000);

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
            "isMeanwhileOverduePlatform": 2,
            "isOverdue": 1,
            "isOverdueHistoryIdCard": 1,
            "isSometimeLoans": 2,
            "lastOverdueTime": "2019-09-01",
            "lawRiskDetail": [
                { "isHit": "2", "riskId": "idcard_hit_court_dishonesty", "riskName": "身份证命中法院失信被执行人" },
                { "isHit": "2", "riskId": "idcard_hit_court_executed", "riskName": "身份证命中法院被执行人" },
                { "isHit": "2", "riskId": "idcard_hit_crime", "riskName": "身份证命中犯罪通缉名单" },
                { "isHit": "2", "riskId": "hit_break_law", "riskName": "疑似涉黄涉恐行为" },
                { "isHit": "2", "riskId": "hit_cheat_loan", "riskName": "疑似存在骗贷行为" },
                { "isHit": "2", "riskId": "hit_infomation_forge", "riskName": "疑似身份信息不符" }
            ],
            "loanPlatformCheckDetailJson": [
                { "loanCount15d": 0, "loanCount180d": 3, "loanCount30d": 0, "loanCount90d": 3, "orgCount": 0, "orgType": "CASH_LOAN", "orgTypeName": "现金贷" },
                { "loanCount15d": 1, "loanCount180d": 2, "loanCount30d": 1, "loanCount90d": 2, "orgCount": 0, "orgType": "CONSUMSTAGE", "orgTypeName": "消费分期" }],
            "maximumOverdueMoney": "1000-2000",
            "name": "王国青",
            "overdueDetail": [
                { "overdueDate": 1567267200000, "overdueDays": "M0", "overdueMoney": "1000-2000", "overdueStatus": "未结清", "overdueUpdateDate": "2019-09" }
            ],
            "phone": "15112338336",
            "requestId": "0000000",
            "riskIndex": 70,
            "riskSuggest": "复查",
            "threeMonthOverdueCount": "1",
            "threeMonthOverdueMoney": "1",
            "unitId": "99999",
            "userId": "3333"
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
        riskHtml = riskHtml + '<p>' +detail.lawRiskDetail[i].riskName + '</p>';
    } 
    $('#riskList').html(riskHtml);

    // 网贷申请通过率 修改文案： 88 及 网贷贵宾，万般拥戴
    var passPercentHtml = '<span>88</span><span class="fuHao">%</span>网贷贵宾，万般拥戴';
    $('#passPercent').html(passPercentHtml);

    // 用户信息
    $('#usrName').html(detail.name); // 注意脱敏
    $('#usrAge').html('29岁'); // 注意转义
    $('#usrSex').html('男性'); // 注意转义
    $('#usrAdr').html(detail.address);
    $('#usrID').html(detail.idCard); // 注意脱敏
    $('#usrNbr').html('NO.' + detail.requestId);
    $('#reportDate').html('2019-08-24 20:27:51'); // 注意转义

    // 是否命中信贷逾期风险
    var isOverdue = 'Y';
    var isOverdueTxt = '是';
    var isOverdueTbody = '<tr><td>2019.01.14</td><td>¥0~1000</td><td>61~90</td><td>未验证</td></tr>'; // 循环构造出tr
    $('#isOverdue').html(isOverdueTxt);
    if (isOverdue === 'Y') {
        $('#isOverdueTable').show();
        // 添加表格数据
        $('#isOverdueTbody').html(isOverdueTbody);
    } else {
        $('#isOverdueTable').hide();
    }

    // 是否命中信贷逾期风险
    var isAdminis = 'Y';
    var isAdminisTxt = '是';
    var isAdminisList = ''; // 循环构造出list
    isAdminisList = isAdminisList + '<p class="colorOrange">被执行人</p>'
    isAdminisList = isAdminisList + '<div class="wrapper single">'
    isAdminisList = isAdminisList + '<p class="title-area"><span class="title">时间：</span> <span class="content">2018-05-19</span></p>'
    isAdminisList = isAdminisList + '</div>'
    isAdminisList = isAdminisList + '<div class="wrapper single">'
    isAdminisList = isAdminisList + '<p class="title-area"><span class="title">验证状态：</span><span class="content">异议中</span></p>'
    isAdminisList = isAdminisList + '</div>'
    isAdminisList = isAdminisList + '<div class="wrapper single">'
    isAdminisList = isAdminisList + '<p class="title-area"><span class="title">时间：</span> <span class="content">2011-12-10</span></p>'
    isAdminisList = isAdminisList + '</div>'
    isAdminisList = isAdminisList + '<div class="wrapper single">'
    isAdminisList = isAdminisList + '<p class="title-area"><span class="title">验证状态：</span> <span class="content">已验证</span></p>'
    isAdminisList = isAdminisList + '</div>'
    $('#isAdminis').html(isAdminisTxt);
    if (isAdminis === 'Y') {
        $('#isAdminisList').show();
        $('#isAdminisList').html(isAdminisList);
    } else {
        $('#isAdminisList').hide();
    }

    // 借贷和还款检测
    $('#3MonSuccNbr').html('3'); // 或返回无记录
    $('#3MonSuccMoney').html('¥100'); // 或返回无记录
    $('#lastSuccDate').html('2018-05-19'); // 或返回无记录
    $('#maxSuccMoney').html('¥100'); // 或返回无记录
    $('#isSuccCurrent').html('否'); // 或返回无记录

    // 逾期行为检测
    $('#overdueDay').html('24天'); // 或返回无记录
    $('#3MonNbr').html('24'); // 或返回无记录
    $('#3MonMoney').html('¥100-5000'); // 或返回无记录
    $('#3MonPlatform').html('2'); // 或返回无记录
    $('#lastDate').html('2018-05-19'); // 或返回无记录
    $('#maxMoney').html('¥5000'); // 或返回无记录
    $('#isCurrent').html('是'); // 或返回无记录

    // 网贷风险检测

    // 关联信息检测

    // 多平台借贷检测


}

getDetail();