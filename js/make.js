/**
 * Created by zd on 2014/11/7.
 */
$(function(){
    function updatePicArr(){
        var selectArr = [];
        $(".pic-item.checked").each(function(i, item){
            selectArr.push($(this).children(".trip-pic").attr("src"));
        });
        $picInput.val(selectArr.join(" "));
    }
    var picArr = [];
    var $picItem = $(".pic-item");
    $picItem.each(function(i, item){
        picArr.push($(this).children(".trip-pic").attr("src"));
    });
    var $picInput = $("#picArr");
    $(".check-all").tap(function(){
        var $self = $(this);
        if($self.hasClass("checked")){
            $self.removeClass("checked");
            $(".day-check").removeClass("checked");
            $picItem.removeClass("checked");
            $(".text-item").removeClass("checked");
        }else{
            $self.addClass("checked");
            $(".day-check").addClass("checked");
            $picItem.addClass("checked");
            $(".text-item").addClass("checked");
        }
        updatePicArr();
        return false;
    });
    $(".day-check").tap(function(){
        var $self = $(this);
        var $picList = $self.parent().next();
        if($self.hasClass("checked")){
            $self.removeClass("checked");
            $picList.children(".pic-item").removeClass("checked");
            $picList.children(".text-item").removeClass("checked");
        }else{
            $self.addClass("checked");
            $picList.children(".pic-item").addClass("checked");
            $picList.children(".text-item").addClass("checked");
        }
        updatePicArr();
    });

    $picItem.tap(function(){
        $(this).toggleClass("checked");
        updatePicArr();
    });
    $(".text-item").tap(function(){
        $(this).toggleClass("checked");
    });
    $("#completeBtn").tap(function(){
        if($picInput.val()){
            $("#submitForm").submit();
        }else{
            $(".tip").text("提示：请选择要打印的照片");
        }
    });
});