import React from 'react';
import { connect } from 'react-redux'
import {loadLaunches, getLaunches} from './apis/fetchApi';

import './App.css';
import Home from './Home';

function App(props) {
  return (
    // <div>Home</div>
    <Home name='anki' {...props} />
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
