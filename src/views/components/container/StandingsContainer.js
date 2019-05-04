import React, { Component } from 'react';
import { connect } from 'react-redux';
import Standings from '../presentational/Standings';

class StandingsContainer extends Component {
  render(){
    return (
      <Standings 
        dataTable={this.props.standings[0].table}
      />
    )
  }
}

const mapStateToProps = state => ({
  standings: state.competition.competitionReducer.standings.standings.filter(std => std.type === "TOTAL")
});

export default connect(mapStateToProps)(StandingsContainer);