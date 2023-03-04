app.controller("loginCtrl",function($scope,$rootScope){
    $scope.login = function(){
        if($rootScope.user.name == 'Truong'){
            $rootScope.signin = true
            alert('Đăng Nhập Thành Công')
        }else{
            alert('Đăng Nhập Thất Bại')
        }
    }
})
app.directive("validPass2", function () {
    return {
        require : 'ngModel',
        link : function(scope,element,attr,mCtrl){
            function fnValidate(value){
                if(value.length > 8){
                    mCtrl.$setValidity('charE',true)
                }else{
                    mCtrl.$setValidity('charE',false)
                }
                return value
            }
            mCtrl.$parsers.push(fnValidate);
        }
    }
})