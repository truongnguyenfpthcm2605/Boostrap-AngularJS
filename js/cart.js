app.controller("cartCtrl", function ($scope, $routeParams, $rootScope) {
    $scope.object = JSON.parse($routeParams.p)
    $scope.object.check = false
    $scope.object.quanity = $routeParams.q
    $scope.object.color = $routeParams.c


    $rootScope.arraycart.push($scope.object)
    // loai bo cung loai
    $scope.listCart = $rootScope.arraycart.filter((product, index, self) =>
        index === self.findIndex((p) => p.ime === product.ime)
    );
    // delete
    $scope.delete = function (index) {
        $scope.listCart.splice(index, 1)
    }
    // check 
    $scope.ok = function () {
        for (const item of $scope.listCart) {
            if (!item.check) {
                alert('Vui Lòng Chọn Sản Phẩm Bạn Muốn Thanh Thoán')
            }
        }
    }
    // lay qua bill
    $scope.sendBill = function () {
        $scope.bill = $scope.listCart.filter(function (item, index, array) {
            return item.check
        })


        return $scope.bill

    }
    


})












