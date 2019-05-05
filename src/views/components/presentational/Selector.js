import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Selector = (props) => {
  return (
    <header className='App-header'>
        <FormControl>
          <TextField
            required
            id="standard-required"
            label="League Code/ID"
            onChange={(event) => props.handleLeagueCodeChange(event)}
            margin="normal"
            />
          <Button variant="contained" color="primary" onClick={props.handleClick}>
            Standings
          </Button>
        </FormControl>
    </header>
  )
}

export default Selector;