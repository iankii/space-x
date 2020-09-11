import React from 'react';
import { connect } from 'react-redux'
import {loadLaunches, getLaunches} from './apis/fetchApi';

import './App.css';
import Home from './Home';

function App(props) {
  return (
    // <div>Home</div>
    <div>
      <Home name='anki' {...props} />
          {/* we can add footer here */}
      <h3 className='Footer'><b>Developed By :</b> {'{Ankit Pal}'}</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  launchDetails: getLaunches()
})

const mapDispatchToProps = dispatch => ({
  loadLaunches: query => loadLaunches(query)
})


// TODO: move to another connect file
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
