import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  background: #fafafa;
`;

const Person = styled.div`
  padding: 30px 20px;
  text-align: center;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

const SideBar = observer(({ data, setCurrentData, currentData }) => (
  <SideBarContainer className="sidebar">
    {data.map(person => (
      <Person
        key={person.name}
        onClick={() => setCurrentData(person)}
        className={person.name === currentData.name && 'active'}
      >
        {person.name}
      </Person>
    ))}
  </SideBarContainer>
));
export default SideBar;
