import React, { useEffect, useState } from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
// import uuid from 'react-uuid';

function Aloitus() {
  const [uutiset, setUutiset] = useState([]);

  useEffect(() => {
    fetch('https://xamkbit.azurewebsites.net/uutiset')
    .then(response => response.json())
    .then(resData => setUutiset(resData))
  }, []);

  const fetchItems = () => {
    fetch('https://xamkbit.azurewebsites.net/uutiset')
    .then(response => response.json())
    .then(resData => setUutiset(resData))
    .catch(err => console.error(err))
  }

  return (
    <>
      <Button variant="outlined" color="primary" onClick={fetchItems}>
        Päivitä uutiset
      </Button>
      <List dense={true}>
        { uutiset.map( (uutinen, index) => {
          return (
            <ListItem key={index} sx={{ m: 0 }}>
              <Link to={`/Uutinen/${index}`}>
                <ListItemText primary={uutinen.otsikko} secondary={uutinen.pvm}  />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );}

export default Aloitus;