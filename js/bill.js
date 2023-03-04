app.controller("billCtrl", function ($scope, $routeParams, $http) {
    $scope.billsp = JSON.parse($routeParams.sp)
    $scope.total = $scope.billsp.reduce(function (accumulator, item) {
        return accumulator + item.price * item.quanity
    }, 0)


    $scope.add = function () {
        $http.post("/carts.js", JSON.stringify($scope.billsp))
            .then(function (response) {
                console.log('Dữ liệu đã được post thành công');
            }, function (error) {
                console.log('Lỗi post dữ liệu');
            });
    }
})