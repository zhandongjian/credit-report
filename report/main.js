// 加载最新报告
function getLastReport() {
    $('#detailCount').html('未获取');
    $('#detailType').html('风险指数');
    // 正式代码start
    // $.ajax({
    //     type: 'POST',
    //     url: 'getLastReport',
    //     contentType: 'application/json',
    //     data: JSON.stringify({ phone: $('#phoneNbr').val() }), // 输入参数phone从cookie获取
    //     success: function (jsonResult) {
    //         // 返回 {count:'85%'}
    //         if (jsonResult.code === '1') {
    //             $('#detailCount').html(jsonResult.data.count);
    //             $('#detailType').html('查看报告');
    //             //绑定明细事件
                $('#toDetail').unbind('click').bind('click', toDetail);
    //         } else {
    //             alert(jsonResult.msg);
    //             $('#toDetail').unbind('click')；
    //         }
    //     },
    //     error: function (data) {
    //         alert('通讯异常');
    //     }
    // });
    // 正式代码end

    // 测试代码start
    $('#detailCount').html('85%');
    $('#detailType').html('查看报告');
    //绑定明细事件
    $('#toDetail').unbind('click').bind('click', toDetail);
    // 测试代码end
}
getLastReport();

function toDetail() {
    // 点圈圈，跳转最新明细
    window.location.href = './report.html';
}

function toList(){
    // 点查询记录，跳转查询历史
    window.location.href = './list.html';
}

function queryReport(){
    // 点击重新查询，跳支付申请页面
    window.location.href = './apply.html';
}

function toAbout(){
    // 点击关于
    window.location.href = './about.html';
}