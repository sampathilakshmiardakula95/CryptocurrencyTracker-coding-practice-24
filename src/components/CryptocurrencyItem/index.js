// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrenciesDetails} = props
  const {
    id,
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptocurrenciesDetails
  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
