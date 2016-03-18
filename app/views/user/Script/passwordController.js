app.controller('passWordCallCtrl', ['$scope', '$state', 'service',function($scope, $state, service) {
        
        $scope.event = {
            btnSubmit: function () {
                
                   var user= $("input[name=uid]").val();
                    //此处需要与后台比对是否有ID 
                    if(user !== '100'){
                        $(".callPwd-from-tip-error ").show();
                        $("input[name=uid]").addClass('error');
                        $(".callPwd-from-tip-error span").text("工号错误，请输入正确工号。");
                    }else{
                        //验证透过否
                        if($(".handler_ok_bg").is(':visible')){
                            debugger
                            $state.go("passwordRoute");
                        }else{
                            $(".callPwd-from-tip-error ").show();
                            $("input[name=uid]").addClass('error');
                            $(".callPwd-from-tip-error span").text("验证未通过"); 
                        }
                    }
                
                
            }
        }

    }])
   app.controller('passwordPhoneCtrl', function($scope, $state, service) {
        $scope.event = {
            Login: function() {
                //$state.go("iscs.main.tab");
            }
        }

    })