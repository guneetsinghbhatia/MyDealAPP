var myapp = angular.module('myapp', ["ui.router","highcharts-ng"])
myapp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/computerDeal")

    $stateProvider
      .state('computerDeal', {
          url: "/computerDeal",
          templateUrl: "computerDeal.html"
      })
        .state('computerDeal.list', {
            url: "/list",
            templateUrl: "computerDeal.list.html",
            controller: function ($scope, mydealpriceservice, myebaypriceservice, myamazonpriceservice, mysearspriceservice, mytangapriceservice, mymacyspriceservice) {
                $scope.items = [{
                    name: "Hard Disk",
                    description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Hard Disk  for $6.99. Shipping is free. Thanks fullbody",
                    src: "/Images1/Hard_disk.jpg",
                    dealPrice:6.99

                }
                    ,
                    {
                        name: "Ram",
                        description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Ram  for $26.99. Shipping is free. Thanks fullbody"

                      , src: "/Images1/ram.jpg",
                        dealPrice: 26.99
                    }, {
                        name: "Keyboard",
                        description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Keyboard (various colors) for $16.99. Shipping is free. Thanks fullbody"
                  , src: "/Images1/keyboard.jpg",
                        dealPrice: 16.99
                    },
                 {
                     name: "Mouse",
                     description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Mouse  for $69.99. Shipping is free. Thanks fullbody"
                 , src: "/Images1/mouse.jpg",
                     dealPrice: 69.99
                 }];
                $scope.open = function (index) {
                    mydealpriceservice.setProperty($scope.items[index].dealPrice);
                    myebaypriceservice.setProperty($scope.items[index].dealPrice + 10.00);
                    myamazonpriceservice.setProperty($scope.items[index].dealPrice + 20.00);
                    mymacyspriceservice.setProperty($scope.items[index].dealPrice + 5.00);
                    mysearspriceservice.setProperty($scope.items[index].dealPrice + 15.00);
                    mytangapriceservice.setProperty($scope.items[index].dealPrice + 7.00);
                }
            }
        })

      .state('toys', {
          url: "/toys",
          templateUrl: "toys.html"
      })
        .state('toys.list', {
            url: "/list",
            templateUrl: "toys.list.html",
            controller: function ($scope, mydealpriceservice, myebaypriceservice, myamazonpriceservice, mysearspriceservice, mytangapriceservice, mymacyspriceservice) {
                $scope.items = [{
                    name: "Mickey Mouse",
                    description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Hard Disk  for $6.99. Shipping is free. Thanks fullbody",
                    src: "/Images1/Micky.jpg",
                    dealPrice: 6.99
                }
                    ,
                    {
                        name: "Miny",
                        description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Ram  for $26.99. Shipping is free. Thanks fullbody"

                      , src: "/Images1/Miny.jpg",
                        dealPrice: 26.99
                    }, {
                        name: "barbie",
                        description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Keyboard (various colors) for $16.99. Shipping is free. Thanks fullbody"
                  , src: "/Images1/barbie.jpg"
                    },
                 {
                     name: "frozen",
                     description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Mouse  for $69.99. Shipping is free. Thanks fullbody"
                 , src: "/Images1/frozen.jpg",
                     dealPrice: 69.99
                 }];
                $scope.mydealpriceservice = mydealpriceservice;
            }
        })
         .state('bed', {
             url: "/bed",
             templateUrl: "Bed_Bath.html"
         })
    .state('bed.list', {
        url: "/list",
        templateUrl: "Bed_Bath.list.html",
        controller: function($scope, mydealpriceservice, myebaypriceservice, myamazonpriceservice, mysearspriceservice, mytangapriceservice, mymacyspriceservice)
    {
        $scope.items = [{
            name: "Bed Sheet",
            description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Hard Disk  for $6.99. Shipping is free. Thanks fullbody",
            src: "/Images1/bedsheet.jpg",
            dealPrice: 6.99
        }
            ,
            {
                name: "Pillows",
                description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Ram  for $26.99. Shipping is free. Thanks fullbody"

              , src: "/Images1/pillow.jpg",
                dealPrice: 26.99
            }, {
                name: "Pears Soap",
                description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Keyboard (various colors) for $16.99. Shipping is free. Thanks fullbody"
          , src: "/Images1/pears.jpg",
                dealPrice: 16.99
            },
         {
             name: "Dove Shampoo",
             description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Mouse  for $69.99. Shipping is free. Thanks fullbody"
         , src: "/Images1/dove.jpg",
             dealPrice: 69.99
         }];
        $scope.open = function (index) {
            mydealpriceservice.setProperty($scope.items[index].dealPrice);
            myebaypriceservice.setProperty($scope.items[index].dealPrice + 10);
            myamazonpriceservice.setProperty($scope.items[index].dealPrice + 20);
            mymacyspriceservice.setProperty($scope.items[index].dealPrice + 5);
            mysearspriceservice.setProperty($scope.items[index].dealPrice + 15);
            mytangapriceservice.setProperty($scope.items[index].dealPrice + 7);
        }
    }

    })
    $stateProvider
      .state('men_product', {
          url: "/men_product",
          templateUrl: "men_products.html"
      })
        .state('men_product.list', {
            url: "/list",
            templateUrl: "men_product.list.html",
            controller: function ($scope, mydealpriceservice, myebaypriceservice, myamazonpriceservice, mysearspriceservice, mytangapriceservice, mymacyspriceservice) {
                $scope.items = [{
                    name: "Shirts",
                    description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided shirts  for $6.99. Shipping is free. Thanks fullbody",
                    src: "/Images1/shirt.jpg",
                    dealPrice: 6.99
                }
                    ,
                    {
                        name: "Trousers",
                        description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Trousers  for $26.99. Shipping is free. Thanks fullbody"

                      , src: "/Images1/trouser.jpg",
                      dealPrice: 26.99
                    }, {
                        name: "Shoes",
                        description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Shoes (various colors) for $16.99. Shipping is free. Thanks fullbody"
                  , src: "/Images1/shoes.jpg",
                  dealPrice: 16.99
                    },
                 {
                     name: "Tie",
                     description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Tie  for $69.99. Shipping is free. Thanks fullbody"
                 , src: "/Images1/tie.jpg",
                 dealPrice: 69.99
                 }];
                $scope.open = function (index) {
                    mydealpriceservice.setProperty($scope.items[index].dealPrice);
                    myebaypriceservice.setProperty($scope.items[index].dealPrice + 10);
                    myamazonpriceservice.setProperty($scope.items[index].dealPrice + 20);
                    mymacyspriceservice.setProperty($scope.items[index].dealPrice + 5);
                    mysearspriceservice.setProperty($scope.items[index].dealPrice + 15);
                    mytangapriceservice.setProperty($scope.items[index].dealPrice + 7);
                }
            }
        })
        .state('women_product', {
            url: "/women_product",
            templateUrl: "women_products.html"
            
        })
    .state('women_product.list', {
        url: "/list",
        templateUrl: "women_product.list.html",
        controller: function ($scope, mydealpriceservice, myebaypriceservice, myamazonpriceservice, mysearspriceservice, mytangapriceservice, mymacyspriceservice) {
            $scope.items = [{
                name: "Women Shirts",
                description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided shirts  for $6.99. Shipping is free. Thanks fullbody",
                src: "/Images1/womenshirt.jpg",
                dealPrice: 6.99
            }
                ,
                {
                    name: "Women Trousers",
                    description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Trousers  for $26.99. Shipping is free. Thanks fullbody"

                  , src: "/Images1/womentrouserjpg.jpg",
                  dealPrice: 26.99
                }, {
                    name: "Women Shoes",
                    description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Shoes (various colors) for $16.99. Shipping is free. Thanks fullbody"
              , src: "/Images1/womenshoes.jpg",
              dealPrice: 16.99
                },
             {
                 name: "Cosmetic",
                 description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Tie  for $69.99. Shipping is free. Thanks fullbody"
             , src: "/Images1/cosmetic.jpg",
             dealPrice: 69.99
             }];
            $scope.open = function (index) {
                mydealpriceservice.setProperty($scope.items[index].dealPrice);
                myebaypriceservice.setProperty($scope.items[index].dealPrice + 10);
                myamazonpriceservice.setProperty($scope.items[index].dealPrice + 20);
                mymacyspriceservice.setProperty($scope.items[index].dealPrice + 5);
                mysearspriceservice.setProperty($scope.items[index].dealPrice + 15);
                mytangapriceservice.setProperty($scope.items[index].dealPrice + 7);
            }
        }
    })
    .state('misc', {
        url: "/misc",
        templateUrl: "misc.html"
    })
    .state('misc.list', {
        url: "/list",
        templateUrl: "misc.list.html",
        controller: function ($scope, mydealpriceservice, myebaypriceservice, myamazonpriceservice, mysearspriceservice, mytangapriceservice, mymacyspriceservice) {
            $scope.items = [{
                name: "Men Shirts",
                description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided shirts  for $6.99. Shipping is free. Thanks fullbody",
                src: "/Images1/shirt.jpg",
                dealPrice: 6.99
            }
                ,
                {
                    name: "Women Trousers",
                    description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Trousers  for $26.99. Shipping is free. Thanks fullbody"

                  , src: "/Images1/womentrouserjpg.jpg",
                    dealPrice: 26.99
                }, {
                    name: "Women Shoes",
                    description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Shoes (various colors) for $16.99. Shipping is free. Thanks fullbody"
              , src: "/Images1/womenshoes.jpg",
                    dealPrice: 16.99
                },
             {
                 name: "Men Shoes",
                 description: "UPDATE: This popular deal is available again.Deal Genius has DG Hill Braided Tie  for $69.99. Shipping is free. Thanks fullbody"
             , src: "/Images1/shoes.jpg",
                 dealPrice: 69.99
             }];
            $scope.open = function (index) {
                mydealpriceservice.setProperty($scope.items[index].dealPrice);
                myebaypriceservice.setProperty($scope.items[index].dealPrice + 10);
                myamazonpriceservice.setProperty($scope.items[index].dealPrice + 20);
                mymacyspriceservice.setProperty($scope.items[index].dealPrice + 5);
                mysearspriceservice.setProperty($scope.items[index].dealPrice + 15);
                mytangapriceservice.setProperty($scope.items[index].dealPrice + 7);
            }
            // $scope.current = {};

        }

        
    })
});

myapp.controller('myctrl', function ($scope, mydealpriceservice, myebaypriceservice, myamazonpriceservice, mysearspriceservice, mytangapriceservice, mymacyspriceservice) {

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'column'
            }
        },
        series: [{
            name: "Competitor Price",
            // data: [["Macys", 10], ["Sears", 15], ["ebay", 12], ["Amazon", 8], ["Tanga", 7]]
            data: [{
                name: 'Macys',
                color: 'Red',
                y: 10
            }, {
                name: 'Sears',
                color: 'Green',
                y: 12
            },
            {
                name: 'ebay',
                color: 'Orange',
                y: 15
            },
            {
                name: 'Amazon',
                color: 'Yellow',
                y: 8
            },
            {
                name: 'Tanga',
                color: 'Grey',
                y: 15
            }]
        },
        {
            name: 'Deal Price',
            type: 'scatter',
             data: [7, 7, 7, 7, 7]



        }],
        title: {
            text: 'Price Compare Chart'
        },
        loading: false,


        xAxis: {
            title: {
                text: 'Production Day'
            },
            categories: []

        },
        yAxis: {
            title: {
                text: 'Gross Production'
            }
        }

    }




    $scope.setprice = function()
    {
        //$scope.chartConfig.series[1].setData([mydealpriceservice.getProperty(), mydealpriceservice.getProperty(), mydealpriceservice.getProperty(), mydealpriceservice.getProperty()])
       // $scope.chartConfig.series[0].data = [dataFactory.getebayprice.getProperty(), dataFactory.getamazonprice.getProperty(), dataFactory.getmacysprice.getProperty(), dataFactory.getsearsprice.getProperty(), dataFactory.gettangaprice.getProperty()];
      //  $scope.chartConfig.series[0].data = [dataFactory.getebayprice(), dataFactory.getamazonprice(), dataFactory.getmacysprice(), dataFactory.getsearsprice(), dataFactory.gettangaprice()];
        $scope.chartConfig.series[1].data = [mydealpriceservice.getProperty(), mydealpriceservice.getProperty(), mydealpriceservice.getProperty(), mydealpriceservice.getProperty(), mydealpriceservice.getProperty()];
        $scope.chartConfig.series[0].data[0].y = myebaypriceservice.getProperty();
        $scope.chartConfig.series[0].data[1].y= myamazonpriceservice.getProperty();
        $scope.chartConfig.series[0].data[2].y=mytangapriceservice.getProperty();
        $scope.chartConfig.series[0].data[3].y= mymacyspriceservice.getProperty();
        $scope.chartConfig.series[0].data[4].y = mysearspriceservice.getProperty();
    }

    $scope.addPoints = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        // $scope.mydealpriceservice = mydealpriceservice
       
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.chartConfig.series.push({
            data: rnd
        })
    }

    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.swapChartType = function () {
        if (this.chartConfig.options.chart.type === 'line') {
            this.chartConfig.options.chart.type = 'bar'
        } else {
            this.chartConfig.options.chart.type = 'line'
            this.chartConfig.options.chart.zoomType = 'x'
        }
    }

    $scope.toggleLoading = function () {
        this.chartConfig.loading = !this.chartConfig.loading
    }

   
});
myapp.directive('modalDialog', function () {
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function (scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function () {
                scope.show = false;
            };
        },
        template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>" // See below
    };
});
myapp.controller('MyCtrlPop', ['$scope', function ($scope) {
    $scope.modalShown = false;
    $scope.text = 'me@example.com';
     $scope.pattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
   // $scope.pattern = /^a.*$/;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;

    };
}]);
myapp
    .service('mydealpriceservice', function () {
        var dealprice = 7;

        return {
            getProperty: function () {
                return dealprice;
            },
            setProperty: function (value) {
                dealprice = value;
            }
        };
    });

myapp
    .service('myebaypriceservice', function () {
        var dealprice = 7;

        return {
            getProperty: function () {
                return dealprice;
            },
            setProperty: function (value) {
                dealprice = value;
            }
        };
    });
myapp
    .service('myamazonpriceservice', function () {
        var dealprice = 7;

        return {
            getProperty: function () {
                return dealprice;
            },
            setProperty: function (value) {
                dealprice = value;
            }
        };
    });
myapp
    .service('mymacyspriceservice', function () {
        var dealprice = 7;

        return {
            getProperty: function () {
                return dealprice;
            },
            setProperty: function (value) {
                dealprice = value;
            }
        };
    });
myapp
    .service('mysearspriceservice', function () {
        var dealprice = 7;

        return {
            getProperty: function () {
                return dealprice;
            },
            setProperty: function (value) {
                dealprice = value;
            }
        };
    });
myapp
    .service('mytangapriceservice', function () {
        var dealprice = 7;

        return {
            getProperty: function () {
                return dealprice;
            },
            setProperty: function (value) {
                dealprice = value;
            }
        };
    });