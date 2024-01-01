import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function ChartView({ data }) {
    const [chartRef, setChartRef] = useState(null);

    useEffect(() => {
        if (chartRef && data) {
            const chartInstance = new Chart(chartRef, {
                // Chart configuration based on data and desired visualization
                type: 'bar', // Example, adjust as needed
                data: {
                    labels: data.map(item => item.topic),
                    datasets: [{
                        label: 'Intensity',
                        data: data.map(item => item.intensity),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    // Chart customization options
                }
            });
        }
    }, [chartRef, data]);

    return <canvas ref={setChartRef} />;
}

export default ChartView;