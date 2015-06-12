/**
 * Created by jorge hernandez on 6/9/2015.
 */
var App = window.App;

App.directive('chartDirective', ['$log', function ($log) {
    "use strict";

    $log.log('chartDirective created');

    return {
        templateUrl: 'js/directive/chart/partials/chartTemplate.html',
        scope: {
            chartInfo: '='
        },
        restrict: 'E',
        link: function (scope, $element) {

            scope.$watch('chartInfo', function(oldVal, newVal) {
                if (newVal && oldVal !== newVal) {
                    var container = $element.find('div');
                    container.html('');
                    container.html('<canvas id="myChart" width="400" height="400"></canvas>');
                    scope.createChart();
                }
            }, true);

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

            scope.createChart = function() {
                var element = document.getElementById("myChart");
                var ctx = element.getContext("2d");

                var data = [];
                addChartData('Male', '#F7464A', '#5AD3D1', data);
                addChartData('Female', '#FDB45C', '#FFC870', data);
                addChartData('Unknown', '#46BFBD', '#5AD3D1', data);

                new Chart(ctx).Pie(data, options);
            };

            function addChartData(label, color, highlight, data) {
                var population = _.filter(scope.chartInfo.data, function (e) {
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
        }
    };
}]);