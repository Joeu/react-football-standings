import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

/**
 * CSS-in_JS styles
 */
const styles = {
  odd: {
    backgroundColor: '#f2f2f2'
  },
  even: {
    backgroundColor: '#fff'
  },
  classification: {
    color: '#008000'
  },
  endZone: {
    color: '#FF6347'
  }
}

/**
 * Displays the table standings, highlightins the squads that are in classification and delegation zones.
 * @param {*} props 
 */
const StandingsTable = (props) => {
  const getStatus = () => {
    return new Date() < new Date(props.competitionInfo.season.endDate)
      ? "On going" : "Finished"; 
  }

  const setZone = (rowIndex) => {
    if (rowIndex < 4) {
      return styles.classification;
    }
    if (rowIndex > props.dataTable.length -5) {
      return styles.endZone;
    }
  }

  return (
    <div>
      {
        props.competitionInfo
          && <h3><span>{props.competitionInfo.competition.name} - {getStatus()}</span></h3>
      }
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Position</TableCell>
            <TableCell>Team</TableCell>
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
              <TableCell component="th" scope="row"
                style={setZone(props.dataTable.indexOf(row))}
              >
                <b>{row.position}</b>
              </TableCell>
              <TableCell align="left"><b>{row.team.name}</b></TableCell>
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

export default StandingsTable;