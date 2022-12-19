import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Uutinen() {
  const [uutiset, setUutiset] = useState([]);
  const { indeksi } = useParams();

  useEffect(() => {
    fetch('https://xamkbit.azurewebsites.net/uutiset')
    .then(response => response.json())
    .then(resData => setUutiset(resData))
  }, []);

  return (
    <>
    <Typography variant='h4'>{ uutiset[indeksi]?.otsikko }</Typography>
    <Typography>{ uutiset[indeksi]?.pvm }</Typography>
    <Typography><img alt="uutiskuva" src={ uutiset[indeksi]?.kuva } width="400px"></img></Typography>
    <Typography variant='body1' gutterBottom={true}>{ uutiset[indeksi]?.sisalto }</Typography>
    <Typography variant='button'><a href={ uutiset[indeksi]?.linkki }>Linkki uutiseen Iltalehden sivuilla</a></Typography>
    </>
  )
}

export default Uutinen;