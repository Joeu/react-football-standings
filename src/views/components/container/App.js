import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';
import SelectorContainer from './SelectorContainer';
import Standings from '../presentational/Standings';

/**
 * Container component for the App.
 */
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SelectorContainer payload={this.props.payload} loading={this.props.loading} />
        </header>
        <main>
          {
            this.props.loading
              && <div>Loading...</div>
          }
          {
            this.props.payload
              && <Standings payload={this.props.payload} />
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
  payload: state.competitionReducer.payload,
  loading: state.competitionReducer.loading
});

export default connect(mapStateToProps)(App);
