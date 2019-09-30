import React, { Component } from 'react';
import uuid from 'react-uuid';
import CurrencyItem from './component/CurrencyItem';
import './App.css';

class App extends Component {

  state = {
    currenciesNB: [],
    availableCurrency: [
      'RUB',
      'EUR',
      'USD'
    ]
  };

  UNSAFE_componentWillMount() {
    
    // NB
    fetch( 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json' )
    .then( res => res.json() )
    .then( currenciesNB => {
      this.setState( { currenciesNB: currenciesNB } )
    } );

  }

  markCurrency = ( cc ) => {

    if( this.state.availableCurrency.includes( cc ) ) {

      let availableCurrency = this.state.availableCurrency;

      let currencyRemove = cc;

      let currencyIndex = availableCurrency.indexOf( currencyRemove );

      if (currencyIndex !== -1) availableCurrency.splice(currencyIndex, 1);

      this.setState( {
        availableCurrency: availableCurrency
      } );

    } else {

      this.setState( {
        availableCurrency: [...this.state.availableCurrency, cc]
      } );

    }

  }

  componentDidUpdate() {

    console.log( this.state );

  }

  render() {

    const currenciesNB = this.state.currenciesNB.map( currency => (

      <CurrencyItem
        key={uuid()}
        currency={currency}
        availableCurrency={this.state.availableCurrency}
        markCurrency={this.markCurrency}
        />

    ) );

    return (
      <div className="MxCurrencyExWrap">
        
        <div className="MxCurrencyExListOfCurrency">

          <h2>Choose currency</h2>
          <div>

            {currenciesNB}

          </div>
          
        </div>

      </div>
    );
  }

}

export default App;
