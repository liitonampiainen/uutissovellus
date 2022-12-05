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
    <Typography variant='h4'>Tämän uutisen useParams-indeksi ennen mäppäystä on {indeksi}</Typography>
    {uutiset.slice(indeksi, (indeksi + 1)).map((uutinen, index) => {
        return (
          <div key={index}>
            <Typography>Tämän uutisen useParams-indeksi mäppäyksen jälkeen on { indeksi }</Typography>
            <Typography>Tämän uutisen .map-indeksi on { index }</Typography>
            <Typography variant='h4'>{uutinen.otsikko}</Typography>
            <Typography>{uutinen.pvm}</Typography>
            <Typography><img alt="uutiskuva" src={uutinen.kuva} width="400px"></img></Typography>
            <Typography variant='body1' gutterBottom={true}>{uutinen.sisalto}</Typography>
            <Typography variant='button'><a href={uutinen.linkki}>Linkki uutiseen Iltalehden sivuilla</a></Typography>
          </div>
        )
      }
    )}
    </>
  )
}

export default Uutinen;