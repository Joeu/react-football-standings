import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  odd: {
    backgroundColor: '#f2f2f2'
  },
  even: {
    backgroundColor: '#fff'
  }
}

const StandingsTable = (props) => {
  return (
    <section>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Games Played</TableCell>
            <TableCell align="right">Won</TableCell>
            <TableCell align="right">Lost</TableCell>
            <TableCell align="right">Draw</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataTable.map(row => (
            <TableRow key={row.team.id} 
              style={
                props.dataTable.indexOf(row) % 2 === 0
                ? styles.odd
                : styles.even
              }
            >
              <TableCell component="th" scope="row"><b>{row.team.name}</b></TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.playedGames}</TableCell>
              <TableCell align="right">{row.won}</TableCell>
              <TableCell align="right">{row.lost}</TableCell>
              <TableCell align="right">{row.draw}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default StandingsTable;