import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import createx from "./images/i2p.png"


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="315"
          src = {createx}
          alt="Create X, Idea to Prototype"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Create X - Idea to Prototype
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Idea to Prototype (I2P) program, part of CREATE-X, offers undergraduate research course credit for teams to advance ideas for a potential value creating product by performing basic research, analysis, building, and testing — leading to a proof of concept prototype. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
