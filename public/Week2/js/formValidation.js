/**
 * Created by jorge hernandez on 5/18/2015.
 */

angular.module('MyApp', []).controller('ValidationController', ['$scope', function ($scope) {
    "use strict";

    $scope.formErrors = [];
    $scope.terms = false;
    $scope.invalidForm = false;

    $scope.user = {
        name: undefined,
        email: undefined
    }

    $scope.onSubmit = function () {
        $scope.formErrors = [];

        for (var prompt in $scope.user) {
            if ($scope.user[prompt] === undefined) {
                $scope.formErrors.push("You must specify a valid value for field: " + prompt);
            }
        }

        if (!$scope.terms) {
            $scope.formErrors.push("You must accept the terms and conditions");
        }

        $scope.invalidForm = $scope.formErrors.length > 0;
    };
}])