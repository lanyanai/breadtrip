/**
 * Created by zd on 2014/11/7.
 */
$(function(){
    $(".check-all").tap(function(){
        var $self = $(this);
        if($self.hasClass("checked")){
            $self.removeClass("checked");
            $(".day-check").removeClass("checked");
            $(".pic-item").removeClass("checked");
            $(".text-item").removeClass("checked");
        }else{
            $self.addClass("checked");
            $(".day-check").addClass("checked");
            $(".pic-item").addClass("checked");
            $(".text-item").addClass("checked");
        }

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
    });

    $(".pic-item").tap(function(){
        $(this).toggleClass("checked");
    });
    $(".text-item").tap(function(){
        $(this).toggleClass("checked");
    });
});