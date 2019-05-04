import React, { Component } from 'react';
import { connect } from 'react-redux';
import Selector from '../presentational/Selector';
import { fetchCompetition } from '../../../state/ducks/competition/actions';
import StandingsContainer from './StandingsContainer';

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
      <div>
        <Selector
          seasons={this.props.seasons}
          handleLeagueCodeChange={this.handleLeagueCodeChange}
          handleClick={this.handleClick}
        >
        </Selector>
        {
          this.props.loading
          && <div>Loading...</div>
        }
        {
          this.props.standings
          && <StandingsContainer />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  standings: state.competition.competitionReducer.standings,
  loading: state.competition.competitionReducer.loading
});

const mapDispatchToProps = dispatch => ({
  fetchCompetition: (id, year) => dispatch(fetchCompetition(id, year))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer);