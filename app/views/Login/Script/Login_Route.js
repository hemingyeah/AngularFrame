app
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("Login", {
				url: '/Login',
				templateUrl: 'views/Login/Login.html',
				controller: 'LoginCtrl',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([
								'views/Login/Script/Login_Controller.js',
								'views/Login/Script/Login_Service.js',
								'scripts/switch.js',
								'scripts/jquery.SuperSlide.2.1.1.js'
								// 'scripts/login.js'
							]);
						}
					]
				}
			})
	}]);
