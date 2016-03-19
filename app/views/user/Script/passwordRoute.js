app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("password", {
            url: '/password',
            template: '<div ui-view></div>',
            resolve: {
                deps: ['$ocLazyLoad',
                    function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'views/user/script/passwordController.js',
                            'views/user/script/passwordService.js',
                            'views/user/script/passWordCall.js'
                        ]);
                    }
                ]
            }
        })
        //Id页面
        .state("password.passwordCall", {
            url: '/passwordCall',
            template: "<password-call></password-call>",
            controller: 'passWordCallCtrl',
            resolve: {
                deps: ['$ocLazyLoad',
                    function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'styles/user/drag.css',
                            'views/user/script/drag.js',
                        ]);
                    }
                ]
            }
        })
        //Phone页面
        .state('password.passwordPhone',{
            url: '/passwordPhone',
            templateUrl: 'views/user/passwordPhone.html',
            controller: 'passwordPhoneCtrl'
            
        })
        //Reset页面
        .state('password.passwordReset',{
            url: '/passwordReset',
            template: '<password-reset></password-reset>',
            controller: 'passwordResetCtrl'
            
        })
        //Phone页面
        .state('password.passwordSuccess',{
            url: '/passwordSuccess',
            templateUrl: 'views/user/passwordSuccess.html',
            controller: 'passwordSuccessCtrl'
            
        })
}]);
