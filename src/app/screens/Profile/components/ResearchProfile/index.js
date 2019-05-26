import ResearchProfile from './ResearchProfile'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

const validate = values =>
  Object.keys(values).reduce((acc, key) => {
    const value = values[key]

    if (key === 'platform') return acc

    if (value.length < 3)
      acc[key] = 'Please enter a display name that is at least 3 characters.'
    else if (value.match(/\W|_/g))
      acc[key] = 'Sorry your display name may not contain special characters.'

    return acc
  }, {})

const onSubmit = ({ platform, username }, _, { reset, history }) => {
  reset()
  history.push(`/profile/${platform}/${username}`)
}

export default compose(
  withRouter,
  reduxForm({
    form: 'player',
    validate,
    initialValues: { platform: 'pc' },
    onSubmit
  })
)(ResearchProfile)
