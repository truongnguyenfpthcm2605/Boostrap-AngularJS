app.controller("detailCtrl", function ($scope, $routeParams, $rootScope) {
    // $scope.arraysp = JSON.parse($routeParams.sp)
    $scope.detailpro = JSON.parse($routeParams.p)
    $scope.amout = 0
    $scope.quanity = 1
    $scope.color = 'Vàng'
    $scope.id = ""
    $scope.userCheck = function () {
        if ($rootScope.signin) {
            $scope.id = "#by"
        } else {
            alert("Vui Lòng Đăng Nhập")
        }
    }

    // Comment

    $scope.cmt = {
        name: $rootScope.user.name,
        img: $rootScope.user.img,
        content: ""
    }

    // duyet tim kiem len mang
    $scope.checkCmt = function () {
        if ($rootScope.signin) {
            $rootScope.comments.push($scope.cmt)
            $scope.cmt = {
                name: $rootScope.user.name,
                img: $rootScope.user.img,
            }
            $rootScope.comments.reverse()
        } else {
            alert("Vui Lòng Đăng Nhập")
        }
    }




})