// 'use strict';
app
    .config(
        function($stateProvider, $urlRouterProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider
                .otherwise('/login');
            $stateProvider
                .state('iscs', {
                    abstract: true,
                    url: '/iscs',
                    templateUrl: 'views/index.html',
                    controller: function($scope, $state, service) {
                        //获取菜单数据
                        $scope.MenuList = [{
                            Name: "基础管理",
                            ChildMenu: [{
                                Name: "个人信息",
                                view: "personalInfo",
                                show: false,
                                class: ''
                            }, {
                                Name: "基础信息",
                                view: "baseInfo",
                                show: false,
                                class: ''
                            }]
                        }, {
                            Name: "商品管理",
                            ChildMenu: [{
                                Name: "商品资料管理",
                                view: "goodsInfo",
                                show: false,
                                class: ''
                            }, {
                                Name: "商品品类管理",
                                view: "goodsKind",
                                show: false,
                                class: ''
                            }]
                        }, {
                            Name: "店铺管理",
                            ChildMenu: [{
                                Name: "店铺管理",
                                view: "shopManage",
                                show: false,
                                class: ''
                            }, {
                                Name: "铺货管理",
                                view: "disManage",
                                show: false,
                                class: ''
                            }]
                        }, {
                            Name: "订单管理",
                            ChildMenu: [{
                                Name: "订单查询",
                                view: "orderSearch",
                                show: false,
                                class: ''
                            }, {
                                Name: "历史订单",
                                view: "orderHis",
                                show: false,
                                class: ''
                            }]
                        }, {
                            Name: "供应链管理",
                            ChildMenu: [{
                                Name: "供应商管理",
                                view: "providerManage",
                                show: false,
                                class: ''
                            }, {
                                Name: "库内加工管理",
                                view: "repManage",
                                show: false,
                                class: ''
                            }]
                        }, {
                            Name: "库存管理",
                            ChildMenu: [{
                                Name: "总库存查询",
                                view: "stockSearch",
                                show: false,
                                class: ''
                            }, {
                                Name: "仓库库存管理",
                                view: "stockManage",
                                show: false,
                                class: ''
                            }]
                        }];
                    }
                })
                .state('iscs.main', {
                    abstract: true,
                    templateUrl: "views/demo/route.html",
                    controller: function($scope, $state) {
                        $scope.model = "hemingyeah";
                        $scope.refresh = function(scope, $state) {
                            
                            // $state.go('iscs.main.tab.default')
                        }
                    },
                })
                .state('iscs.main.tab', {
                    url: '/tab',
                    views: {
                        "default": {
                            url: '/default',
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('default_tpl.html')
                            },
                            // "controller": "personalInfoCtrl as personalInfo"  
                        },
                        "personalInfo": {
                            url: '/personalInfo',
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('personalInfo_tpl.html')
                            },
                            "controller": "personalInfoCtrl as personalInfo"
                        },
                        "baseInfo": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('baseInfo_tpl.html')
                            },
                            "controller": "baseInfoCtrl as baseInfo"
                        },
                        "goodsInfo": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('goodsInfo_tpl.html')
                            },
                            "controller": "goodsInfoCtrl as goodsInfo"
                        },
                        "goodsKind": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('goodsKind_tpl.html')
                            },
                            "controller": "goodsKindCtrl as goodsKind"
                        },
                        "shopManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('shopManage_tpl.html')
                            },
                            "controller": "shopManageCtrl as shopManage"
                        },
                        "disManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('disManage_tpl.html')
                            },
                            "controller": "disManageCtrl as disManage"
                        },
                        "orderSearch": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('orderSearch_tpl.html')
                            },
                            "controller": "orderSearchCtrl as orderSearch"
                        },
                        "orderHis": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('orderHis_tpl.html')
                            },
                            "controller": "orderHisCtrl as orderHis"
                        },
                        "providerManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('providerManage_tpl.html')
                            },
                            "controller": "providerManageCtrl as providerManage"
                        },
                        "repManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('repManage_tpl.html')
                            },
                            "controller": "repManageCtrl as repManage"
                        },
                        "stockSearch": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('stockSearch_tpl.html')
                            },
                            "controller": "stockSearchCtrl as stockSearch"
                        },
                        "stockManage": {
                            "templateProvider": function($templateCache) {
                                return $templateCache.get('stockManage_tpl.html')
                            },
                            "controller": "stockManageCtrl as stockManage"
                        }
                    }
                })
        }
    );
app.controller('personalInfoCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    
    // $state.reload('contact.baseInfo');
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('baseInfoCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('goodsInfoCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('goodsKindCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('shopManageCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('disManageCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('orderSearchCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('orderHisCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('providerManageCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
app.controller('repManageCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();

    //总库存查询
    manageService.dataGridInit($scope);
    $scope.columnDefs = $scope.columnDefs.concat(
        [{
            headerName: "主题",
            field: "Title",
            width: 300,
            filter: "text",
            filterParams: {
                apply: true
            }
        }, {
            headerName: "来源",
            field: "Source",
            width: 200
        }, {
            headerName: "通知级别名称",
            field: "NoticeLevelName",
            suppressMenu: true
        }, {
            headerName: "评分总条数",
            field: "StarCount",
            suppressMenu: true
        }, {
            headerName: "评论总条数",
            field: "CommentCount",
            suppressMenu: true
        }, {
            headerName: '操作',
            width: 100,
            suppressMenu: true,
            cellRenderer: $scope.operCellRendererFunc
        }]); //默认值eventName: "gridOptions.event"

    $scope.gridOptions = {
        columnDefs: $scope.columnDefs,
        virtualPaging: true
    }
    $.extend($scope.gridOptions, $scope.options);
}])
app.controller('stockManageCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.refresh = function() {
        $http({
            method: 'GET',
            url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
            headers: {
                // SessionId: sessionStorage.getItem("SessionID")
            },
            params: '',
            data: ''
        }).success(function(data) {
            $scope.model.test = data
        }).error(function(data) {})
    }
    $scope.refresh();
}])
