import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartView({ data }) {
    const [chartRef, setChartRef] = useState(null);
    const chartInstanceRef = useRef(null); // Add ref to hold chart instance
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
                }
            });
            chartInstanceRef.current = chartInstance; // Store instance for later disposal
        }
    }, [chartRef, data]);

    useEffect(() => {
        // Cleanup previous chart instance when data changes or component unmounts
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data]);

    return <canvas ref={setChartRef} />;
}

export default ChartView;