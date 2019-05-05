import React, { Component } from 'react';
import { connect } from 'react-redux';
import Selector from '../presentational/Selector';
import { fetchCompetition } from '../../../state/ducks/competition/actions';

class SelectorContainer extends Component {
  handleLeagueCodeChange = (event) => {
    let _code = event.target.value;
    this.setState({
      currentCode: _code
    });
  }

  handleClick = () => {
    this.props.fetchCompetition(this.state.currentCode, '2018');
  }

  render() {
    return (
      <Selector
        handleLeagueCodeChange={this.handleLeagueCodeChange}
        handleClick={this.handleClick}
        competitionName={
          this.props.payload
            ? this.props.payload.competition.name
            : null
        }
      >
      </Selector>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCompetition: (id) => dispatch(fetchCompetition(id))
});

export default connect(null, mapDispatchToProps)(SelectorContainer);