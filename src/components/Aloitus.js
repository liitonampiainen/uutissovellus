import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function Aloitus() {
    const [users, setUsers] = useState([]);

    // VÄLIAIKAISESTI POIS KÄYTÖSTÄ
    // useEffect(() => {
    //   fetch('https://reqres.in/api/users')
    //   .then(response => response.json())
    //   .then(resData => setUsers(resData.data))
    // }, []);

    const fetchItems = () => {
      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(resData => setUsers(resData.data))
      .catch(err => console.error(err))
    }
  
    return (
      <div className="App">
        <h1>Kaikki uutiset</h1>
        <Button variant="outlined" color="primary" onClick={fetchItems}>
          Päivitä uutiset
        </Button>
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
              <Link to={`/Uutinen/${index}`}>
                <ListItem key={index}>
                  <ListItemText primary={user.first_name}  sx={{ mr: 2 }}/>
                  <ListItemText primary={user.email} />
                </ListItem>
              </Link>
            );
          })}
        </List>
        </div>
       </div>
    );}

export default Aloitus;