import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { background } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ arr = [], currency, days }) {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === '24h') {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    } else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }

    prices.push(arr[i][1]);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in currency ${currency}`,
        data: prices,
        borderColor: 'rgb(255,99,136)',
        background: 'rgba(255,99,136,0.5)',
      },
    ],
  };

  return <Line options={{ responsive: true }} data={data} />;
}
