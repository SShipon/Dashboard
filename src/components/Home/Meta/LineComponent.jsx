import React from 'react';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
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
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: '#00A76F', // Set curve line color
              borderWidth: 4, // Set border width
              fill: false,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        },
      });
    }
  }, []);


    return (
      <div>
        <canvas ref={chartRef} width="300" height="150" />
      </div>
    );
};

export default LineComponent;