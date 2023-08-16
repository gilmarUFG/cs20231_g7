import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardAnuncios({ data }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        alt="imagem-imovel"
        height="160"
        image="../predioBody.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.valorAluguel}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {data.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.descricao}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Comodidades: ${data.comodidades}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
