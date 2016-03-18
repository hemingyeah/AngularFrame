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
								'views/user/script/passwordController.js',
								'views/user/script/passwordService.js',
                                'styles/user/drag.css',
                                'views/user/script/drag.js',
                                'views/user/script/passWordCall.js'
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
								'views/user/script/passwordController.js',
								// 'views/user/script/passwordService.js',
                                
								// 'views/user/script/passWordCall.js'
								// 'scripts/login.js'
							]);
						}
					]
				}
            })
	}]);
