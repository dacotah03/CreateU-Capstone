import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  useEffect(() => {
    // Ensure the category scale is registered when the component mounts
    Bar.scaleService.updateScaleDefaults('category', {
      ticks: {
        beginAtZero: true,
      },
    });
  }, []);

  return <Bar data={chartData} />;
};

export default BarChart;