import React from 'react';

import CardView from './CardView';

function App({launchDetails}) {
  return (
    <div className={'detailsContainer'}>
      {
        launchDetails ? launchDetails.map((launch) => {
          return (<CardView {...launch} />);
        }) : null

      }
    </div>
  );
}

export default App;
