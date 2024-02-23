import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CircleComponent = () => {
  // Sample data for the doughnut chart
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [200, 200, 100],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: { 
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                fontColor: 'black',
                fontSize: 12,
              },
            },
          },
        },
      });
    }
  }, []);
  return (
    <div>
      <canvas
        ref={chartRef}
        width="200"
        height="250"
      />
    </div>
  );
};

export default CircleComponent;