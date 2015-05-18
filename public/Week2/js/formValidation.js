/**
 * Created by jorge hernandez on 5/18/2015.
 */

angular.module('MyApp', []).controller('ValidationController', ['$scope', function ($scope) {

    $scope.invalidName = false;
    $scope.nameLengthLimit = 20;

    $scope.onNameChange = function () {
        $scope.invalidName = ($scope.name.length > $scope.nameLengthLimit);
        if ($scope.invalidName === false && $scope.name.match(/\d+/g) !== null)
        {
            $scope.invalidName = true;
        }
    };

    $scope.invalidEmail = false;
    $scope.emailLengthLimit = 20;

    $scope.onEmailChange = function () {
        $scope.invalidEmail = ($scope.email.length > $scope.emailLengthLimit);
    };

    $scope.acceptCheckbox = false;

    $scope.onAcceptChange = function () {
        $scope.acceptCheckbox = $scope.acceptCheckbox;
    };
}])