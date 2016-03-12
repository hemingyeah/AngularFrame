//记住用户名密码.用户名/密码/是否存储
function save(username,checkbox){
    if($(checkbox)!=""){
        localStorage.setItem("name",username);//增加
    }else{
        localStorage.removeItem("name");//清除
    }
};
//登录
function loginSubmit(){
    var  userid=$("input[name=username]").val();
    var  password=$("input[name=password]").val();
    var  checkoxLogin=$(".login-checkbox span").attr("class");//记住账号
    $.ajax({
        url:'/login',
        method:'post',
        data:{userId : userid,passWord: password},
        success:function(data){
            if(data.success){
                if(data.message == "1"){
                    $(".login-user-err-text").text("用户名或密码不对");
                    $(".login-user-err-main").show();
                    $(".login-user-tip-main").hide();
                }else{
                    window.location = "/index";
                    save(userid,checkoxLogin);//执行localStorage
                }
            }
        }
    });
}
$(function(){
    //记住密码
	$(".login-checkbox").click(function(){
		$(".login-checkbox span").toggleClass("active");
	});
    //切换PC/qrcode点击
	$(".login-user-qrcode").click(function(){
        if($(".login-user").is(":visible")){
          $(".login-user").hide();
		  $(".login-qrcode").show();
          $(this).addClass("avce");
        }else{
          $(".login-user").show();
		  $(".login-qrcode").hide();
          $(this).removeClass("avce");
        }
	});
    //切换PC/qrcode点击
	$(".login-qrcode-pc").click(function(){
		
	});
    //登录提交
   $('#login-submit').click(function(){
       loginSubmit();
   });
   //回车提交
   $("body").on("keydown",function(e){
        var key = e.which;
        if (key == 13) {
            loginSubmit();
        }
   });
   // 用户名非空
   $("input[name=username]").blur(function(){
       var user= $("input[name=username]").val();
       if( user == "" || user == undefined || user == null){
           $(".login-user-err-text").text("请输入用户名");
           $(".login-user-err-main").show();
           $(".login-user-tip-main").hide();
       }else{
           $(".login-user-err-main").hide();
       }
   });
   // 密码非空
   $("input[name=password]").blur(function(){
       var pwd= $("input[name=password]").val();
       if(pwd == "" || pwd == undefined || pwd == null){
           $(".login-user-err-text").text("请输入密码");
           $(".login-user-err-main").show();
           $(".login-user-tip-main").hide();
       }else{
           $(".login-user-err-main").hide();
       }
   });

   //读取localStorage
   if (localStorage.getItem("name")) {
      $(".login-checkbox span").addClass("active");
      $("input[name=username]").val(localStorage.getItem("name"));

   }
});

