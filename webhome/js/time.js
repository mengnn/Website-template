$(function(){
    lxfEndtime();
});
function lxfEndtime(){
    $(".lxftime").each(function(){
    var lxfday=$(this).attr("lxfday");//用来判断是否显示天数的变量
    var endtime = new Date($(this).attr("endtime")).getTime();//取结束日期(毫秒值)
    var nowtime = new Date().getTime();        //今天的日期(毫秒值)
    var youtime = endtime-nowtime;//还有多久(毫秒值)
     var seconds = youtime/1000;
    var minutes = Math.floor(seconds/60);
     var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    var CDay= days ;
    var CHour= hours % 24;
    var CMinute= minutes % 60;
    var CSecond= Math.floor(seconds%60);
     if(endtime<=nowtime){
     $(this).html("<span style='font-size:30px;height:50px;line-height:45px;font-weight:bold; color:#000;display:inline-block;width:100%;text-align:center;margin-top:20px;'>注册已结束</span>")
     }else{
     if($(this).attr("lxfday")=="no"){
     }else{
    $(this).html("<span id='date'>"+days+"</span><span id='hours'>"+CHour+"</span><span id='mins'>"+CMinute+"</span><span id='secs'>"+CSecond+"</span>");
    }
    }
    });
    setTimeout("lxfEndtime()",1000);
};

