import React from 'react';
import { observer } from 'mobx-react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100%;
`;

// const oldData = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };

const LineComponent = observer(({ data }) => {
  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            max: 100,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  return (
    <StyledDiv>
      <Line data={data} options={options} />
    </StyledDiv>
  );
});

export default LineComponent;
