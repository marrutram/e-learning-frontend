import React, { Component } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

class ChartDonut extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myPieChart = this.chartRef.current.getContext("2d");

        new Chart(myPieChart, {
            type: 'doughnut',
            data: {
                labels: ["Alta", "Media", "Baja"],
                datasets: [{
                    data: [100, 30, 15],
                    backgroundColor: ['#1cc88a', '#ffa304', '#ec0000'],
                    hoverBackgroundColor: ['#1cc88a', '#ffa304', '#ec0000'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        });
    }

    render() {
        return (
            <CardBasic title="Promedio Notas">
                 <div className="chart-pie pt-4">
                        <canvas id="myPieChart" ref={this.chartRef}></canvas>
                    </div>
                    <hr />
                    Se puede observar promedio notas.
            </CardBasic>
        )
    }
}

export default ChartDonut;