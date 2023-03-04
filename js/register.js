app.controller("registerCtrl",function($scope){
    $scope.brand =['Apple','SamSung','Sony','LG']
    $scope.person = {
        user : '',
        pass : '',
        fullname : '',
        email: '',
        phone : '',
        birth : '',
        gender : 'option1',
        hobby : $scope.brand[0],
        address : '',
        check : true,
    }
 
    $scope.register = function(){
        if(!$scope.person.check){
            alert("Vui lòng chấp nhận điều khoản")
        }else{
            alert('Đăng kí Thành Công')
        }
    }
})
app.directive("validAddress", function () {
    return {
        require : 'ngModel',
        link : function(scope,element,attr,mCtrl){
            function fnValidate(value){
         
                if(value.length > 10 && value.length < 500){
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

app.directive("validPass", function () {
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
