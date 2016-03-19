app
    .controller('LoginCtrl', function($scope, $state) {
        $scope.app.settings.headerFixed = false;
        $scope.app.name = document.title = "网仓3号";
        $scope.event = {
            Login: function() {
                $state.go("iscs.main.tab");
            }
        }

    })
