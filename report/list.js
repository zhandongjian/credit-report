function getListDate() {
    // 正式代码start
    // 调用接口
    // $.ajax({
    //     type: 'POST',
    //     url: 'postMsg',
    //     contentType: 'application/json',
    //     data: JSON.stringify({ phone: $('#phoneNbr').val() }), // 输入参数phone
    //     success: function (jsonResult) {
    //         // 返回 {code=‘1’,msg='SUCCESS'}
    //         if (jsonResult.code === '1') {

    //         } else {
    //             alert(jsonResult.msg);
    //         }
    //     },
    //     error: function (data) {
    //         alert('通讯异常');
    //     }
    // });
    // 正式代码end

    var listData = [{
        name: 'XXX1',
        phone: '13266661111',
        number: '2019082418061942',
        time: '2019-08-24 20:27:51',
        score: '77',
        state: '已授权'
    }, {
        name: 'XXX2',
        phone: '13266662222',
        number: '2019082418061942',
        time: '2019-08-24 20:27:51',
        score: '45',
        state: '未授权'
    }, {
        name: 'XXX3',
        phone: '13266663333',
        number: '2019082418061942',
        time: '2019-08-24 20:27:51',
        score: '24',
        state: '未授权'
    }];
    var listHtml = '';
    for (var i = 0; i < listData.length; i++) {
        listHtml = listHtml +
            '<div class="record-wrapper">' +
            '<div class="item-box">' +
            '<div class="record-item">' +
            '<div class="item-content">' +
            '<p class="item-line"><span class="title">查询姓名：</span> <span>' + listData[i].name + '</span></p>' +
            '<p class="item-line"><span class="title">手机号码：</span> <span>' + listData[i].phone + '</span></p>' +
            '<p class="item-line"><span class="title">订单编号：</span> <span>' + listData[i].number + '</span></p>' +
            '<p class="item-line"><span class="title">查询时间：</span> <span>' + listData[i].time + '</span></p>' +
            '</div>' +
            '<div class="score-box">' +
            '<p><span class="risk-score">' + listData[i].score + '</span><span class="percent">%</span></p>' +
            '<p class="percent">' + listData[i].state + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    $('#listTable').html(listHtml);
}

getListDate();

function toApply(){
    window.location.href = './apply.html';
}