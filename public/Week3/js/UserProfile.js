/**
 * Created by jorge hernandez on 5/26/2015.
 */

var ProfileApp = window.ProfileApp;

ProfileApp.controller('ProfileController', ['$scope', '$log', 'ProfileService', function ($scope, $log, ProfileService) {
    "use strict";

    $log.log('ProfileController has been created');

    $scope.formErrors = [];
    $scope.terms = false;
    $scope.invalidForm = false;

    var alreadySubmitted = false;

    $scope.user = {
        name: "",
        jobTitle: "",
        state: "",
        postalCode: "",
        mobilePhone: "",
        email: "",
        picture: "../images/empty.png"
    };

    /**
     * Listen to changes in form
     */
    $scope.$watch('user', function (newVal, oldVal) {
        if (alreadySubmitted && (newVal !== oldVal)) {
            formValidation();
        }
    }, true);
    $scope.$watch('terms', function (newVal, oldVal) {
        if (alreadySubmitted && (newVal !== oldVal)) {
            formValidation();
        }
    });

    $scope.onSubmit = function () {
        alreadySubmitted = true;
        formValidation();
    };

    function formValidation() {
        $scope.formErrors = [];
        for (var prompt in $scope.user) {
            if ($scope.user[prompt] === undefined || $scope.user[prompt] === "") {
                $scope.formErrors.push("You must specify field: " + prompt);
            }
        }

        if (!$scope.terms) {
            $scope.formErrors.push("You must accept the terms and conditions");
        }

        $scope.invalidForm = $scope.formErrors.length > 0;
    }

    $scope.onLoadPreviousData = function () {
        $scope.user = ProfileService.getProfileData();
    };

}]);