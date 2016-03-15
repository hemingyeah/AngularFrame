// 'use strict';
app
    .run(
        function($rootScope, $state, $stateParams, service) {
            ajaxCount = 0;
            // $rootScope.open = function($event) {
            //     $event.preventDefault();
            //     $event.stopPropagation();
            //     $rootScope.opened = true;
            // };
            // $rootScope.opened = false;
            // $rootScope.dateOptions = {
            //     formatYear: 'yy',
            //     startingDay: 1,
            //     class: 'datepicker'
            // };
            $rootScope.Page = {
                    Index: 1,
                    Count: 1
                }
                // var RouteHead = "http://192.168.4.24/gaeaapi/Config/";
                // service.http.asyncajax({
                //     url: RouteHead + "GetColumnConfig?appId=&groupRelationId=",
                //     type: "get",
                //     dataType: "json",
                //     success: function(data) {
                //         GridColumnList = data;
                //         $rootScope.GridColumnList = GridColumnList;
                //     }
                // })
                // service.http.asyncajax({
                //     type: "get",
                //     url: RouteHead + 'GetRoutConfig',
                //     success: function(data) {
                //         Route = data;
                //     }
                // });
        }
    )
    .config(
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('GT', {
                    abstract: true,
                    url: '/GT',
                    templateUrl: '/Views/index.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function($ocLazyLoad) {
                                return $ocLazyLoad.load("ui.select").then(function() {
                                    return $ocLazyLoad.load([
                                        '/Views/PowerManage/Script/Power_Service.js',
                                        '/Views/AppManage/Script/App_Service.js',
                                        '/Views/DataBaseManage/Script/DataBase_Service.js'
                                    ]);
                                });
                            }
                        ]
                    },
                    controller: function($scope, $state, service, PowerService, UiConfigService, AppService) {
                        //获取菜单数据
                        $scope.MenuList = [{
                            Name: "基础管理",
                            ChildMenu: [{
                                Name: "个人信息",
                                view: "personalInfo",
                                show: false
                            }, {
                                Name: "基础信息",
                                view: "baseInfo",
                                show: false
                            }]
                        }, {
                            Name: "商品管理",
                            ChildMenu: [{
                                Name: "商品资料管理",
                                view: "goodsInfo",
                                show: false
                            }, {
                                Name: "商品品类管理",
                                view: "goodsKind",
                                show: false
                            }]
                        }, {
                            Name: "店铺管理",
                            ChildMenu: [{
                                Name: "店铺管理",
                                view: "shopManage",
                                show: false
                            }, {
                                Name: "铺货管理",
                                view: "disManage",
                                show: false
                            }]
                        }, {
                            Name: "订单管理",
                            ChildMenu: [{
                                Name: "订单查询",
                                view: "orderSearch",
                                show: false
                            }, {
                                Name: "历史订单",
                                view: "orderHis",
                                show: false
                            }]
                        }, {
                            Name: "供应链管理",
                            ChildMenu: [{
                                Name: "供应商管理",
                                view: "providerManage",
                                show: false
                            }, {
                                Name: "库内加工管理",
                                view: "repManage",
                                show: false
                            }]
                        }, {
                            Name: "库存管理",
                            ChildMenu: [{
                                Name: "总库存查询",
                                view: "stockSearch",
                                show: false
                            }, {
                                Name: "仓库库存管理",
                                view: "stockManage",
                                show: false
                            }]
                        }];
                        // AppService.GetAppDetail($scope, {}, function(data) {
                        //     $scope.app.name = document.title = data ? data.AppName : "中国产业互联网";
                        // })
                        // if (!service.Cookie.Get("UserName")) {
                        //     $state.go("Login");
                        // }
                        // PowerService.LoadUserOperationPermissions($scope, {}, function(data) {
                        //     $scope.MenuList = data.Permissions;
                        // });
                        // $scope.GridColumnList = GridColumnList;
                    }
                })
                .state('GT.Main', {
                    url: '/Main',
                    abstract: true,
                    templateUrl: "/views/demo/route.html"
                })
                .state('GT.Main.Tab', {
                    url: '/tab',
                    views: {
                        "personalInfo": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route1.html')
                            },
                            "controller": "menu1Ctrl as ctrl1"
                        },
                        "baseInfo": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route2.html')
                            },
                            "controller": "menu2Ctrl as ctrl2"
                        },
                        "goodsInfo": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route3.html')
                            },
                            "controller": "menu3Ctrl as ctrl3"
                        },
                        "goodsKind": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route4.html')
                            },
                            "controller": "menu4Ctrl as ctrl4"
                        },
                        "shopManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route5.html')
                            },
                            "controller": "menu5Ctrl as ctrl5"
                        },
                        "disManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route5.html')
                            },
                            "controller": "menu5Ctrl as ctrl5"
                        },
                        "orderSearch": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route1.html')
                            },
                            "controller": "menu1Ctrl as ctrl1"
                        },
                        "orderHis": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route2.html')
                            },
                            "controller": "menu2Ctrl as ctrl2"
                        },
                        "providerManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route3.html')
                            },
                            "controller": "menu3Ctrl as ctrl3"
                        },
                        "repManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route4.html')
                            },
                            "controller": "menu4Ctrl as ctrl4"
                        },
                        "stockSearch": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route5.html')
                            },
                            "controller": "menu5Ctrl as ctrl5"
                        },
                        "stockManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('route5.html')
                            },
                            "controller": "menu5Ctrl as ctrl5"
                        }
                    }
                })
        }
    );
app.controller('menu1Ctrl', ['$scope', function ($scope) {
    
}])
app.controller('menu2Ctrl', ['$scope', function ($scope) {
    
}])
app.controller('menu3Ctrl', ['$scope', function ($scope) {
    
}])
app.controller('menu4Ctrl', ['$scope', function ($scope) {
    
}])
app.controller('menu5Ctrl', ['$scope', function ($scope) {
    
}])
