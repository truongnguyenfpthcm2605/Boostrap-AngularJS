
app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl : "../Component/home.html"
    })
    .when("/infor",{
        templateUrl : "../Component/information.html"
    })
    .when("/contact",{
        templateUrl : "../Component/contact.html"
    })
    .when("/product",{
        templateUrl : "../Component/product.html"
    })
    .when("/support",{
        templateUrl : "../Component/support.html"
    })
    .when("/detail/:p",{
        templateUrl : "../Component/detailProduct.html",
        controller : "detailCtrl"
    })
    .when("/cart/:p/:q/:c",{
        templateUrl : "../Component/allCart.html",
        controller : 'cartCtrl'
        
    })
    .when("/pay/:sp",{
        templateUrl : "../Component/bill.html"
       
        
    })
    .otherwise({
       redirectTo : "/home"
    })
    
})
app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function () {
        $rootScope.loading = true

    })
    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.loading = false

    })
    $rootScope.$on("$routeChangeError", function () {
        $rootScope.loading = false
        alert('Loi tai templet')
    })
})