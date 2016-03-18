app
    .controller('passWordCallCtrl', function($scope, LoginService, $state, service) {
        $scope.app.settings.headerFixed = false;
        $scope.app.name = document.title = "网仓3号密码重置";
        $scope.event = {
            Login: function() {
                $state.go("passwordRoute");//
            }
        }

    })
    .controller('passwordPhoneCtrl', function($scope, LoginService, $state, service) {
        $scope.app.settings.headerFixed = false;
        $scope.app.name = document.title = "网仓3号";
        $scope.event = {
            Login: function() {
                //$state.go("iscs.main.tab");
            }
        }

    })