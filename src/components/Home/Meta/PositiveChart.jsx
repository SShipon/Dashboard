import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PosititveChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const data = [45, 41, 45, 35, 33, 30, 35];
      const minData = Math.min(...data);
      const maxData = Math.max(...data);
      const ctx = chartRef.current.getContext('2d');

      // Define the linear gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        0,
        chartRef.current.height
      );
      gradient.addColorStop(0, '#3DA864');
      gradient.addColorStop(1, 'rgba(61, 168, 100, 0)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'Dataset',
              data: data,
              borderWidth: 1,
              fill: true,
              backgroundColor: gradient, // Use linear gradient background
              borderColor: '#3DA864', // Border color same as gradient start color
              tension: 0.4, // Adjust the tension for different curve shapes
              pointRadius: 0, // Hide data points
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
          scales: {
            x: {
              display: false, // Hide x-axis
            },
            y: {
              display: false, // Hide y-axis
              suggestedMin: minData - 5, // Adjust the minimum value of the y-axis
              suggestedMax: maxData + 5, // Adjust the maximum value of the y-axis
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <div>
        <canvas ref={chartRef} width="60" height="40" />
      </div>
    </div>
  );
};

export default PosititveChart;
