import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardAnuncios({data}) {

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="../predioBody.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Título
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {data.descricao}
        </Typography>
      </CardContent>
    </Card>
  );
}