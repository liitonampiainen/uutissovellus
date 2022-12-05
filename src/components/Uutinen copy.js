import { List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Uutinen(props) {
    const { indeksi } = useParams();
    const [uutiset, setUutiset] = useState([]);

    useEffect(() => {
      fetch('https://xamkbit.azurewebsites.net/uutiset')
      .then(response => response.json())
      .then(resData => setUutiset(resData))
    }, []);

  
    return (
      <>
        <h1>Uutinen, jonka indeksi on { indeksi } on nimeltään " props.uutiset[indeksi].otsikko " </h1>
        <List dense={true}>
          { uutiset.map( (uutinen, index) => {
            return (
              <ListItem key={index} sx={{ m: 0 }}>
                <ListItemText primary={uutinen.otsikko} secondary={uutinen.pvm}  />
                <ListItemText><img alt="Avatar" src={uutinen.kuva} width="200px" /></ListItemText>
                <ListItemText primary={uutinen.sisalto}/>
                <ListItemText><Link to={ uutinen.linkki }>Linkki ei toimi</Link></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </>
    );}

export default Uutinen;