// Write your code here
import {Component} from 'react'
import './index.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="app-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
