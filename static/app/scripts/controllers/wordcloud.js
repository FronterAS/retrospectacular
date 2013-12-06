'use strict';

angular.module('retrospectApp')
    .controller('WordCloudCtrl', [
        '$scope',
        '$routeParams',
        'wordcloud',

        function ($scope, $routeParams, wordcloud) {
            var buildCloud = function (cloudwords) {
                console.log('building cloud');

                var fill = d3.scale.category20();

                d3.layout.cloud().size([300, 300])
                        .words(cloudwords.map(function (d) {
                            return {text: d, size: 10 + Math.random() * 90};
                        }))
                        .padding(5)
                        .rotate(function () { return ~~(Math.random() * 2) * 90; })
                        .font('Impact')
                        .fontSize(function (d) { return d.size; })
                        .on('end', draw)
                        .start();

                function draw(words) {
                    d3.select('#cloud-container').append('svg')
                            .attr('width', window.innerWidth)
                            .attr('height', window.innerHeight)
                        .append('g')
                            .attr('transform', 'translate(150,150)')
                        .selectAll('text')
                            .data(words)
                        .enter().append('text')
                            .style('font-size', function (d) { return d.size + 'px'; })
                            .style('font-family', 'Impact')
                            .style('fill', function (d, i) { return fill(i); })
                            .attr('text-anchor', 'middle')
                            .attr('transform', function (d) {
                                return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
                            })
                            .text(function (d) { return d.text; });
                }
            };

            wordcloud.get(function (cloudwords) {
                buildCloud(cloudwords.results);
            })
        }
    ]
);
