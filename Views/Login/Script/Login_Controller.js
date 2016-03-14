app
    .controller('LoginCtrl', function($scope, LoginService, $state, service) {
        // $scope.app.name = document.title = "网仓3号";
        $scope.event = {
            Login: function() {
                // LoginService.Login($scope, null, function(data) {
                // 	if (data) {
                $state.go("GT.Main");
                // 	}
                // });
            }
        }

    })
