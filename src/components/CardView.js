import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: '230px',
    backgroundColor: 'lightgray',
    // height: 'auto',
    margin: '15px 25px 0'
  }
});

export default function MediaCard(props) {
  const {mission_id=[], mission_name='', flight_number='', launch_year='', land_success='', launch_success='', links={}} = props;
  const classes = useStyles();

  return (
    <Card className={`Card`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={links.mission_patch ? links.mission_patch : "https://dummyimage.com/600x400/000/fff"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${mission_name} #${flight_number}`}
          </Typography>
          {mission_id && (
            <>
              <div>Mission Ids:</div>
              <ul>
                {mission_id.map((id) => {
                  return <li>{id}</li>
                })}
              </ul>
            </>
          )}  
          <Typography gutterBottom variant="h5" component="h2">
            {`Launch Year: ${launch_year}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`Successful Launch: ${launch_success}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`Successful Landing: ${land_success}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
