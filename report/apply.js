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
    // $.ajax({
    //     type: 'POST',
    //     url: 'postMsg',
    //     contentType: 'application/json',  
    //     data: JSON.stringify({ phone: $('#phoneNbr').val() }), // 输入参数phone
    //     success: function (jsonResult) {
    //         // 返回 {code=‘1’,msg='SUCCESS'}
    //         if (jsonResult.code === '1') {
    //             $('#msgBtn').hide();
    //             $('#msgCount').show();
    //             var timesRun = 60;
    //             var interval = setInterval(function () {
    //                 timesRun--;
    //                 $('#msgCount').html(timesRun + 's');
    //                 if (timesRun === 0) {
    //                     clearInterval(interval);
    //                     $('#msgBtn').show();
    //                     $('#msgCount').hide();
    //                 }
    //             }, 1000);
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

function apply() {
    var msgNbr = $('#msgNbr').val();
    var msgTest = /^\d{6}$/;
    var idNbr =  $('#idNbr').val();
    var idTest = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    var name =  $('#name').val();
    var nameTest = /[^\x00-\xff]/g;
    var radio = $("#radio")[0].checked;
    if(nameTest.test(name)){
        $("#nameTip").hide();
    }else{
        $("#nameTip").show();
        return;
    }
    if(idTest.test(idNbr)){
        $("#idTip").hide();
    }else{
        $("#idTip").show();
        return;
    }

    if (checkMsg()) {
        if (msgTest.test(msgNbr)) {
            if(radio){
                $("#radioTip").hide();
                postApply();
            }else{
                $("#radioTip").show();
            }
        } else {
            $('#msgTip').show();
        }
    }
}

function postApply() {
    // 正式代码start
    // $.ajax({
    //     type: 'POST',
    //     url: 'postLogin',
    //     contentType: 'application/json',
    //     data: JSON.stringify({ phone: $('#phoneNbr').val(), msg: $('#msgNbr').val() }), // 输入参数phone,msg
    //     success: function (jsonResult) {
    //         // 返回 {code=‘1’,msg='SUCCESS'}
    //         if (jsonResult.code === '1') {
    //             // 跳转支付页
    //             window.location.href = './report.html';
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
    window.location.href = './report.html';
    // 测试代码end
}