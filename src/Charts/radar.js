import React from 'react';
import { observer } from 'mobx-react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100%;
`;

// const oldData = {
//   labels: [
//     'Eating',
//     'Drinking',
//     'Sleeping',
//     'Designing',
//     'Coding',
//     'Cycling',
//     'Running',
//   ],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(179,181,198,0.2)',
//       borderColor: 'rgba(179,181,198,1)',
//       pointBackgroundColor: 'rgba(179,181,198,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(179,181,198,1)',
//       data: [65, 59, 90, 81, 56, 55, 40],
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       pointBackgroundColor: 'rgba(255,99,132,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(255,99,132,1)',
//       data: [28, 48, 40, 19, 96, 27, 100],
//     },
//   ],
// };

const RadarComponent = observer(({ data }) => {
  const options = {
    legend: {
      display: false,
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
        borderDash: 20,
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <StyledDiv>
      <Radar data={data} options={options} />
    </StyledDiv>
  );
});

export default RadarComponent;
