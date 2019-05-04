import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Selector = (props) => {
  return (
    <div className={styles.root}>
      <FormControl className={styles.formControl}>
        <TextField
          required
          id="standard-required"
          label="League Code/ID"
          className={styles.textField}
          onChange={(event) => props.handleLeagueCodeChange(event)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={props.handleClick} className={styles.button}>
          Standings
        </Button>
      </FormControl>
    </div>
  )
}

export default Selector;