import React from 'react';
import { PositionButton, PinButtons } from 'components';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <PinButtons
        buttons={[
          { name: '找單車', icon: 'bike', isActive: true },
          { name: '找車位', icon: 'parking', isActive: false },
        ]}
      />
      <PositionButton />
    </div>
  );
};
export default Home;
