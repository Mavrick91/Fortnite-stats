import { branch, compose, renderNothing } from 'recompose'
import InfoProfile from './InfoProfile'

const decorate = compose(branch(({ player }) => !player, renderNothing))

export default decorate(InfoProfile)
