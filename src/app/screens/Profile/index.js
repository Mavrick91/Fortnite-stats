import Profile from './Profile'
import withPlayer from 'app/utils/HOC/withPlayer'
import { compose, withState } from 'recompose'

const decorate = compose(
  withState('activeNav', 'setActiveNav', 'OVERVIEW'),
  withPlayer
)
export default decorate(Profile)
