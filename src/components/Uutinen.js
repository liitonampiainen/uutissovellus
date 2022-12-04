import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';

function Uutinen() {
    const [users, setUsers] = useState([]);
    const { indeksi } = useParams();


    useEffect(() => {
      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(resData => setUsers(resData.data))
    }, []);
  
    return (
      <div className="App">
        <h1>Yksittäinen uutinen</h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <List dense={true}>
            { users.map( (user, index) =>{
              return (
                <ListItem key={index}>
                  <ListItemText primary={user[indeksi].first_name}  sx={{ mr: 2 }}/>
                  <ListItemText primary={user.email} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );}

export default Uutinen;