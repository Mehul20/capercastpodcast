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
          image = "https://www.armoneyandpolitics.com/wp-content/uploads/2021/01/ox-oculogx-new-logo.jpg"
          alt= "Create X"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ox 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Logistics // TO DO
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}