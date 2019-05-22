import Home from './Home'
import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { getUserIdPlayer } from 'app/services/home/action'

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

const onSubmit = (value, dispatch, props) => {
  dispatch(getUserIdPlayer({ ...value, formId: props.form }))
}

export default compose(
  reduxForm({
    form: 'player',
    validate,
    initialValues: { platform: 'pc' },
    onSubmit
  })
)(Home)
