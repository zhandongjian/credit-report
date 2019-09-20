function sentMsg() {
    if (checkMsg()) {
        // 通过，调用短信接口
        postMsg();
    }
}

function checkMsg() {
    var phoneNbr = $('#phoneNbr').val();
    var phoneTest = /^1(\d{10})$/;
    if (phoneNbr.length === 11) {
        if (phoneTest.test(phoneNbr)) {
            $('#phoneTip').hide();
            return true;
        } else {
            $('#phoneTip').show();
            return false;
        }
    } else {
        $('#phoneTip').show();
        return false;
    }
}

function postMsg() {
    // 正式代码start
    // 设置短信倒计时
    // $('#msgBtn').hide();
    // $('#msgCount').show();
    // var timesRun = 60;
    // var interval = setInterval(function () {
    //     timesRun--;
    //     $('#msgCount').html(timesRun + 's');
    //     if (timesRun === 0) {
    //         clearInterval(interval);
    //         $('#msgBtn').show();
    //         $('#msgCount').hide();
    //     }
    // }, 1000);
    // // 调用接口
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

    // 测试代码start
    $('#msgBtn').hide();
    $('#msgCount').show();
    var timesRun = 60;
    var interval = setInterval(function () {
        timesRun--;
        $('#msgCount').html(timesRun + 's');
        if (timesRun === 0) {
            clearInterval(interval);
            $('#msgBtn').show();
            $('#msgCount').hide();
        }
    }, 1000);
    // 测试代码end
}

function login() {
    var msgNbr = $('#msgNbr').val();
    var msgTest = /^\d{6}$/;
    if (checkMsg()) {
        if (msgTest.test(msgNbr)) {
            $('#msgTip').hide();
            postLogin();
        } else {
            $('#msgTip').show();
        }
    }
}

function postLogin() {
    // 正式代码start
    // $.ajax({
    //     type: 'POST',
    //     url: 'postLogin',
    //     contentType: 'application/json',
    //     data: JSON.stringify({ phone: $('#phoneNbr').val(), msg: $('#msgNbr').val() }), // 输入参数phone,msg
    //     success: function (jsonResult) {
    //         // 返回 {code=‘1’,msg='SUCCESS'}
    //         if (jsonResult.code === '1') {
    //             // 跳转主页
    //             window.location.href = './main.html';
    //         } else {
    //             alert(jsonResult.msg);
    //         }
    //     },
    //     error: function (data) {
    //         alert('通讯异常');
    //     }
    // });
    // 正式代码end

    // 测试代码start
    // 跳转主页
    window.location.href = './main.html';
    // 测试代码end
}

function toAgree(){
    window.location.href = './agree.html';
}