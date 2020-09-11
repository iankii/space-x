import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons(props) {
  const {defaultSelection, buttons, buttonClass, buttonGroupClass, type, updateFilters} = props;
  const [alignment, setAlignment] = React.useState(defaultSelection);

  const onButtonChange = (event, selection) => {
    setAlignment(selection);
    switch (type) {
      case 'launchYear':
        updateFilters({launch_year: selection});
        break;
      case 'isSuccessLaunch':
        updateFilters({launch_success: selection});
        
        break;
      case 'isSuccessLanding':
          updateFilters({land_success: selection});
        
        break;
      default:
        break;
    }
  };

  return (
    <ToggleButtonGroup
      className={buttonGroupClass}
      value={alignment}
      exclusive
      onChange={onButtonChange}
      aria-label="text alignment"
    >
      {buttons?.map((button) => {
        return (
        <ToggleButton className={buttonClass} value={button.value} aria-label="left aligned" type={type}>
          {button.value}
        </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
