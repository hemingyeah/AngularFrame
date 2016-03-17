app
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('GT.Plugin', {
				url: '/Plugin',
				templateUrl: 'Views/Layout/Default.html',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load("ui.select").then(function() {
								return $ocLazyLoad.load([
									'Views/Base/PluginManage/Script/Plugin_Service.js',
									'Views/Authority/AccountManage/Script/Account_Service.js',
									'Views/Base/PluginManage/Script/Plugin_Controller.js',
									'Views/Base/PageManage/Script/Page_Service.js',
									'Views/RoleManage/Script/Role_Service.js'
								]);
							});
						}
					]
				}
			})
			.state("GT.Plugin.List", {
				url: '/List/{MenuType}',
				templateUrl: 'Views/Base/PluginManage/PluginList.html',
				controller: 'PluginListCtrl'
			})
			.state("GT.Plugin.Add", {
				url: '/Add',
				templateUrl: 'Views/Base/PluginManage/PluginOperate.html',
				controller: 'PluginOperateCtrl'
			})
			.state("GT.Plugin.Edit", {
				url: '/{Id}',
				templateUrl: 'Views/Base/PluginManage/PluginOperate.html',
				controller: 'PluginOperateCtrl'
			})
	}]);
