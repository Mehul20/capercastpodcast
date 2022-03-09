import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import oxlogo from "./images/ox.jpeg"


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="315"
          src = {oxlogo}
          alt="Ox Arkansas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            OX
          </Typography>
          <Typography variant="body2" color="text.secondary">
          OX is a supply chain startup based out of Bentonville, Arkansas revolutionising picking, batching and other aspects of the supply chain.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
