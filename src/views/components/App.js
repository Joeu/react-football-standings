import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import SelectorContainer from './container/SelectorContainer';
import StandingsContainer from './container/StandingsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SelectorContainer />
        </header>
        <main>
          {
            this.props.loading
            && <div>Loading...</div>
          }
          {
            this.props.standings
            && <StandingsContainer />
          }
        </main>
        <footer>
          <a href='https://www.football-data.org/'>football-data</a>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  standings: state.competition.competitionReducer.standings,
  loading: state.competition.competitionReducer.loading
});

export default connect(mapStateToProps)(App);
