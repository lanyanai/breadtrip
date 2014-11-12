/**
 * Created by zd on 2014/11/7.
 */
$(function(){
    $("#areaSelect").citySelect({nodata:"none",required:false});
    var unitPrice = parseFloat($("#unitPrice").text());
    $tip = $(".tip");
    $("#orderNum").blur(function(){
        var orderNum = $(this).val();
        if(!/^[0-9]*[1-9][0-9]*$/.test(orderNum)){
            $tip.text("提示：请输入正确的购买数量");
            $(this).focus();
        }else{
            $tip.text("");
            var total = unitPrice * orderNum, pointsPrice = parseFloat($("#pointsPrice").text());
            $("#orderPrice").text(total.toFixed(2) + " RMB");
            $("#payPrice").text((total + pointsPrice).toFixed(2) + "RMB");
        }
    });
    $("#receiverPhone").blur(function(){
        var phone = $(this).val();
        if(!/^(1[0-9]{10})$/.test(phone)) {
            $tip.text("提示：请输入正确的手机号");
            $(this).focus();
        }else{
            $tip.text("");
        }
    });
    $("#submitBtn").tap(function(){
        $("#orderNum").blur();
        $("#receiverPhone").blur();
        if(!$("#prov").val() || !$("#city").val()){
            $tip.text("提示：请选择正确所在区域");
        }
        if(!$tip.text()){
            $("#orderForm").submit();
        }
        return false;
    });
});