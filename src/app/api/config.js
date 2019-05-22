import axios from 'axios'

const API_KEY = 'ecdaafcd-a541-44b1-a11b-ca4d64be2694'

const instance = axios.create({
  headers: {
    'TRN-Api-Key': API_KEY,
  }
})

export default instance
