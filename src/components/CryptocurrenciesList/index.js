// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount = () => {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptocurrenciesData: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-logo"
            />
            <ul className="crypto-details-list-container">
              <li className="list-header">
                <p className="list-coin-type-heading">Coin Type</p>
                <div className="usd-and-euro-values-container">
                  <p className="list-coin-value-heading">USD</p>
                  <p className="list-coin-value-heading">EURO</p>
                </div>
              </li>
              {cryptocurrenciesData.map(eachItem => (
                <CryptocurrencyItem
                  key={eachItem.id}
                  cryptocurrenciesDetails={eachItem}
                />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
