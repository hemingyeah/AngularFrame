'use strict';

/* Controllers */

angular.module('app')
    .controller('AppCtrl',
        function($scope, $translate, $localStorage, $window, $state, service) {
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');
            // config
            $scope.app = {
                name: '网仓3号',
                UserName: service.Cookie.Get("UserName") || "系统管理员",
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
              Name: "首页",
              view: "default",
              show: true,
              class: 'btn-info'
            }];
            $scope.refresh;
            $scope.model = {};
            $scope.ifShow = function(data, evt) {
                $(evt.target).siblings().removeClass('btn-info')
                $(evt.target).addClass('btn-info');
                angular.forEach($scope.tabItems, function(obj, index) {
                    obj.show = false;
                    obj.class = "btn-default";
                })
                data.show = true;
                data.class = 'btn-info'
                // $scope.refresh();
            }
            $scope.closeTab = function(data, index) {
                $scope.tabItems.splice(index, 1);
                angular.forEach($scope.tabItems, function(obj, index) {
                    obj.show = false;
                    obj.class = "btn-default";
                })
                $scope.tabItems[0].show = true;
                $scope.tabItems[0].class = 'btn-info';
            }
            $scope.addTab = function(data, evt) {
                if ($.inArray(data, $scope.tabItems) === -1) {
                    angular.forEach($scope.tabItems, function(obj, index) {
                        obj.show = false;
                        obj.class = "btn-default";
                    })
                    data.show = true;
                    data.class = "btn-info"
                    $scope.tabItems.push(data);
                } else {
                    angular.forEach($scope.tabItems, function(obj, index) {
                        obj.show = false;
                        obj.class = "btn-default";
                    })
                    data.show = true;
                    data.class = "btn-info"
                };
            }
                /*改造框架*/
        });
