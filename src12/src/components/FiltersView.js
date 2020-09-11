import React from 'react';
import ToggleButtons from './ToggleButtons';

function FiltersView({updateFilters}) {
  const years = [
    {value: 2020},
    {value: 2019},
    {value: 2018},
    {value: 2017},
    {value: 2016},
    {value: 2015},
    {value: 2014},
    {value: 2013},
    {value: 2012},
    {value: 2011},
    {value: 2010}, 
    {value: 2009}, 
    {value: 2008}, 
    {value: 2007}, 
    {value: 2006}, 
  ]

  const toggleValues = [{value: 'true'}, {value: 'false'}];

  return (
    <div className="filetrsContainer">
      <h2>SapceX Launch Programs</h2>
      <div className="filetrsView">
        <h3>Filters</h3>
        <div className="yearsContainer" >
          <h4>Launch Year</h4>
          <ToggleButtons
            defaultSelection={''}
            buttons={years}
            buttonClass={'yearButton'}
            buttonGroupClass={'years'}
            type={'launchYear'}
            updateFilters={updateFilters}
            />
          <h4>Successful Launch</h4>
          <ToggleButtons
            updateFilters={updateFilters}
            type={'isSuccessLaunch'}
            defaultSelection={''}
            buttons={toggleValues}
            buttonClass={'yearButton'}
            buttonGroupClass={'years'}
            />
          <h4>Successful Landing</h4>
          <ToggleButtons
            updateFilters={updateFilters}
            type={'isSuccessLanding'}
            defaultSelection={''}
            buttons={toggleValues}
            buttonClass={'yearButton'}
            buttonGroupClass={'years'}
          />
        </div>
      </div>
    </div>
  );
}

export default FiltersView;
