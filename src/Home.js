import React, { Component } from 'react';
import _ from 'underscore';

import FiltersView from './components/FiltersView';
import DetailsView from './components/DetailsView';
// import Loader from './components/Loader';

import apis from './apis/fetchApi';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        limit: 100,
        launch_year: '',
        launch_success: '',
        land_success: ''
      },
      displayLoader: false
    };
  }

  componentDidMount() {
    if (!this.state.displayLoader) {
      this.setState({displayLoader: true});
    }

    apis.loadLaunches(this.state.filters).then(() => {
      this.setState({displayLoader: false});
    });
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevState.filters, this.state.filters)) {
      this.setState({displayLoader: true});
      apis.loadLaunches(this.state.filters).then(() => {
        this.setState({displayLoader: false});
      });;
    }
  }

  updateFilters = (newFilters) => {
    this.setState(
      {
        ...this.state,
        filters: {
          ...this.state.filters,
          ...newFilters
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        {/* <h1>Hello {this.props.name}!</h1> */}
        <FiltersView updateFilters={this.updateFilters} />
        {/* {!this.state.displayLoader ? <Loader />: <DetailsView {...this.props} />} */}
        <DetailsView {...this.props} />
      </div>
    );
  }
}

export default Homepage;