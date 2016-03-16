'use strict';

/* Controllers */

angular.module('app')
    .controller('AppCtrl',
        function($scope, $translate, $localStorage, $window, service) {
            // add 'ie' classes to html
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');
            // config
            $scope.app = {
                name: '三维任务协同系统',
                UserName: service.Cookie.Get("UserName"),
                GroupRelationName: service.Cookie.Get("GroupRelationName"),
                version: '1.3.3',
                Layout: false,
                // for chart colors
                color: {
                    primary: '#7266ba',
                    info: '#23b7e5',
                    success: '#27c24c',
                    warning: '#fad733',
                    danger: '#f05050',
                    light: '#e8eff0',
                    dark: '#3a3f51',
                    black: '#1c2b36'
                },
                settings: {
                    themeID: 3,
                    navbarHeaderColor: 'bg-black',
                    navbarCollapseColor: 'bg-white-only',
                    asideColor: 'bg-black',
                    headerFixed: false,
                    asideFixed: false,
                    asideFolded: false,
                    asideDock: false,
                    container: false
                }
            }

            // save settings to local storage
            if (angular.isDefined($localStorage.settings)) {
                $scope.app.settings = $localStorage.settings;
            } else {
                $localStorage.settings = $scope.app.settings;
            }
            $scope.$watch('app.settings', function() {
                if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
                    // aside dock and fixed must set the header fixed.
                    $scope.app.settings.headerFixed = true;
                }
                // save to local storage
                $localStorage.settings = $scope.app.settings;
            }, true);

            // angular translate
            $scope.lang = {
                isopen: false
            };
            $scope.langs = {
                zh_CN: '中文简体'
            };
            $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "简体中文";
            $scope.setLang = function(langKey, $event) {
                // set the current lang
                $scope.selectLang = $scope.langs[langKey];
                // You can change the language during runtime
                $translate.use(langKey);
                $scope.lang.isopen = !$scope.lang.isopen;
            };

            function isSmartDevice($window) {
                // Adapted from http://www.detectmobilebrowsers.com
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }
            /*改造框架*/
            $scope.id;
            $scope.tabItems = [{
              Name: "default",
              view: "default",
              show: true
            }];
            $scope.refresh;
            $scope.model = {};
            $scope.ifShow = function(data, evt) {
                angular.forEach($scope.tabItems, function(obj, index) {
                    obj.show = false;
                })
                data.show = true;
                // $scope.refresh();
            }
            $scope.closeTab = function(data, index) {
                $scope.tabItems.splice(index, 1);
                angular.forEach($scope.tabItems, function(obj, index) {
                    obj.show = false;
                })
                $scope.tabItems[0].show = true;
            }
            $scope.addTab = function(data, evt) {
                if ($.inArray(data, $scope.tabItems) === -1) {
                    angular.forEach($scope.tabItems, function(obj, index) {
                        obj.show = false;
                    })
                    data.show = true;
                    $scope.tabItems.push(data);
                };
            }
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
                /*改造框架*/
        });
