import React from 'react';
import StandingsTable from './StandingsTable';
import ErrorHandler from './ErrorHandler';

const Standings = (props) => {
  return (
    
    <div>
      {
        props.payload.standings
          ? <StandingsTable 
              dataTable={props.payload.standings[0].table} 
              competitionInfo={
                props.payload.competition
                  ? props.payload
                  : null
              }
            />
          : <ErrorHandler errorMessage={props.payload.message} />
      }
    </div>
  )
}

export default Standings;