import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component = "img"
          height = "320"
          image = "https://create-x.gatech.edu/sites/default/files/styles/medium/public/logo/launch_250x250.png?itok=-5mlU82r"
          alt= "Create X"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Create X @ Georgia Tech
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Georgia Tech's premier accelerator.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}