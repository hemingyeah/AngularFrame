app
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("passwordcall", {
				url: '/passwordcall',
				templateUrl: 'views/user/passwordcall.html',
				controller: 'passWordCallCtrl',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([
								'views/login/script/loginController.js',
								'views/login/script/loginService.js',
								'scripts/switch.js',
								'scripts/jquery.SuperSlide.2.1.1.js'
								// 'scripts/login.js'
							]);
						}
					]
				}
			})
            .state('passwordPhone',{
                url: '/passwordPhone',
				templateUrl: 'views/user/passwordPhone.html',
				controller: 'passwordPhoneCtrl',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([
								'views/login/script/loginController.js',
								'views/login/script/loginService.js',
								'scripts/switch.js',
								'scripts/jquery.SuperSlide.2.1.1.js'
								// 'scripts/login.js'
							]);
						}
					]
				}
            })
	}]);
