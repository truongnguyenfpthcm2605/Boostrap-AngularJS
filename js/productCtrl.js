app.controller("productCtrl", function ($scope, $http, $routeParams) {
    $scope.choose = ['Sắp xếp theo giá', 'Sắp xếp theo tên', 'Sắp xếp theo Pin', 'Sắp xếp theo Rom']
    $scope.apples = ['Tất Cả', 'Iphone', 'Ipad', 'Macbook', 'Airpods']
    $scope.chose = $scope.choose[0]
    $scope.apple = $scope.apples[0]
    $scope.begin = 0
    $scope.amout = 32
    $scope.titleMore = 'Xem Thêm'
    // lay san pham
    $scope.sp = []

    $http.get("../js/sp.js").then(function (response) {
        $scope.sp = response.data
    }, function (response) {
        alert('loi')
    })
    // xem them san pham 
    $scope.more = function () {

        $scope.amout += 3
        if ($scope.amout >= $scope.sp.length) {
            $scope.titleMore = ' Đã Hết'
        }
    }
    $scope.find = 'i'
    $scope.s = ''
    $scope.search = function () {
        $scope.find = $scope.s
    }

    // chọn loại
    $scope.finds = function () {
        if ($scope.apple == 'Iphone') {
            $scope.find = 'Iphone'
        } else if ($scope.apple == 'Ipad') {
            $scope.find = 'Ipad'
        } else if ($scope.apple == 'Macbook') {
            $scope.find = 'Macbook'
        } else if ($scope.apple == 'Airpods') {
            $scope.find = 'Airpods'
        } else {
            $scope.find = ''
        }
    }




    // sắp xếp
    $scope.sx = 'price'
    $scope.sort = function () {
        if ($scope.chose == $scope.choose[0]) {
            $scope.finds()
            $scope.sx = 'price'
        }
        if ($scope.chose == $scope.choose[1]) {
            $scope.finds()
            $scope.sx = 'name'
        }
        if ($scope.chose == $scope.choose[2]) {
            $scope.finds()
            $scope.sx = 'pin'
        }
        if ($scope.chose == $scope.choose[3]) {
            $scope.finds()
            $scope.sx = 'rom'
        }
    }




})