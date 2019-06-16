import { compose } from 'recompose'
import Matches from './Matches'
import { connect } from 'react-redux'
import { fetchAllMatches } from 'app/services/matches/action'

const mapStateToProps = state => ({
  matches: state.matchesHistory
})

const mapDispatchToProps = {
  fetchAllMatches
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Matches)
