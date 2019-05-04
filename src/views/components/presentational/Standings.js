import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Standings = (props) => {
  return (
    <div>
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
            <TableRow key={row.team.id}>
              <TableCell component="th" scope="row">{row.team.name}</TableCell>
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
      
    </div>
  )
}

export default Standings;