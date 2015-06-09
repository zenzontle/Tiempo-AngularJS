/**
 * Created by jorge hernandez on 6/5/2015.
 */
var App = window.App;

App.controller('MainController', ['$scope', '$log', function ($scope, $log) {
    "use strict";

    $log.log('Controller has been created');

    $scope.person = {};
    $scope.personList = [];
    $scope.showChart = false;

    function initApp() {
        $scope.person = {
            name: '',
            age: '',
            sex: ''
        };
    }

    $scope.addPerson = function() {
        $scope.personList.push($scope.person);
        initApp();
    };

    $scope.deletePerson = function (element) {
        $scope.personList = _.filter($scope.personList, function (e) {
            return e !== element;
        });
    };

    $scope.sexClass = function (person) {
        if (person.sex === 'Male') {
            return 'person-sex-male';
        }

        if (person.sex === 'Female') {
            return 'person-sex-female';
        }

        if (person.sex === 'Unknown') {
            return 'person-sex-unknown';
        }
    };

    var options = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false
    };

    $scope.createChart = function() {
        $scope.showChart = true;

        var element = document.getElementById("myChart");
        var ctx = element.getContext("2d");

        var data = [];
        addChartData('Male', '#F7464A', '#5AD3D1', data);
        addChartData('Female', '#FDB45C', '#FFC870', data);
        addChartData('Unknown', '#46BFBD', '#5AD3D1', data);

        new Chart(ctx).Pie(data, options);
    };

    function addChartData(label, color, highlight, data) {
        var population = _.filter($scope.personList, function (e) {
            return e.sex === label;
        });

        if (population) {
            data.push({
                value: population.length,
                color: color,
                highlight: highlight,
                label: label
            });
        }
    }

    $scope.personList = [
        {name: 'Jorge', age: 27, sex: 'Male'},
        {name: 'Alma', age: 26, sex: 'Female'},
        {name: 'Alex', age: 17, sex: 'Male'},
        {name: 'Laura', age: 16, sex: 'Female'},
        {name: 'Pato', age: 33, sex: 'Unknown'}
    ];

    initApp();

}]);