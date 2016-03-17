app
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("Login", {
				url: '/Login',
				templateUrl: 'Views/Login/Login.html',
				controller: 'LoginCtrl',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([
								'Views/Login/Script/Login_Controller.js',
								'Views/Login/Script/Login_Service.js',
								'Resources/scripts/switch.js',
								'Resources/scripts/jquery.SuperSlide.2.1.1.js'
								// 'Resources/scripts/login.js'
							]);
						}
					]
				}
			})
	}]);
