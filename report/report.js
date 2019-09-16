function getDetail() {
    // ajax返回数据

    $('#score').html('12'); // 评分
    $('#state').html('健康'); // 状态：健康，中等，偏高

    // 风险列表：根据内容加载列表 <p>XX</p>
    var riskHtml = '<p>未检测到风险点</p><p>命中信贷逾期风险</p><p>命中行政负面风险</p><p>命中多头借贷</p><p>命中行业关注名单</p>';
    $('#riskList').html(riskHtml);

    // 网贷申请通过率 修改文案： 88 及 网贷贵宾，万般拥戴
    var passPercentHtml = '<span>88</span><span class="fuHao">%</span>网贷贵宾，万般拥戴';
    $('#passPercent').html(passPercentHtml);

    // 用户信息
    $('#usrName').html('*张三'); // 注意脱敏
    $('#usrAge').html('29岁'); // 注意转义
    $('#usrSex').html('男性'); // 注意转义
    $('#usrAdr').html('广东省汕尾市');
    $('#usrID').html('441521***********8234'); // 注意脱敏
    $('#usrNbr').html('NO.2019082418062930');
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