import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const pieData = {
    labels: ["Tumor", "Liver"],
    datasets: [
      {
        data: [31.41, 68.59], // Example values: Tumor 20%, Liver 80%
        backgroundColor: ["#ff6384", "#36a2eb"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Tumor vs Liver Percentage</h2>
      <div className="mt-6 p-4 bg-white rounded shadow">
        <Pie 
          data={pieData} 
          className="mt-4"
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
            maintainAspectRatio: false,
          }}
          height={450} // Adjust height as needed
          width={450}  // Adjust width as needed
        />
      </div>
    </div>
  );
}

export default PieChart;
