'use strict';
angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('GT.Operation', {
				url: '/Operation',
				templateUrl: 'Views/Layout/Default.html',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([
								'Views/Base/OperationManage/Script/Operation_Service.js', 
								'Views/Base/OperationManage/Script/Operation_Controller.js', 
								'Views/RoleManage/Script/Role_Service.js'
								]);
						}
					]
				}
			})
			.state("GT.Operation.List", {
				url: '/List/{MenuType}',
				templateUrl: 'Views/Base/OperationManage/OperationManage.html',
				controller: "OperationManageCtrl"
			})
	}]);
