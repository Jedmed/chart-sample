import React from 'react';
import { observer } from 'mobx-react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const BarComponent = observer(({ data }) => {
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
    responsive: true,
  };
  return (
    <StyledDiv>
      <Bar data={data} options={options} />
    </StyledDiv>
  );
});

export default BarComponent;
