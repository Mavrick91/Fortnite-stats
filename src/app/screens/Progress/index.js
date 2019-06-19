import { compose } from 'recompose'
import Progress from './Progress'
import { connect } from 'react-redux'
import { fetchProgressPlayer } from 'app/services/progress/action'

const mapStateToProps = state => ({})

const mapDispatchToProps = {
	fetchProgressPlayer
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Progress)
