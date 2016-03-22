app
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("login", {
				url: '/login',
				templateUrl: 'views/login/login.html',
				controller: 'LoginCtrl',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([
                                'styles/lib/slideBox.css',
								'views/login/script/loginController.js',
								'scripts/switch.js',
								'scripts/jquery.SuperSlide.2.1.1.js'
							]);
						}
					]
				}
			})
	}]);
