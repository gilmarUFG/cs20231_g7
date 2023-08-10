import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInput() {
  const [tipoMoradia, setTipoMoradia] = React.useState('');

  const handleChange = (event) => {
    setTipoMoradia(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Tipo de Aluguel</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={tipoMoradia}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={10}>Apartamento</MenuItem>
          <MenuItem value={21}>Casa</MenuItem>
          <MenuItem value={22}>República</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}