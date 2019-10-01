import React, { Component } from 'react';
import uuid from 'react-uuid';
import CurrencyItem from './component/CurrencyItem';
import CurrencyResult from './component/CurrencyResult';
import MxCurrencyBoxColorBlock from './component/MxCurrencyBoxColorBlock';

import './App.css';

class App extends Component {

  state = {
    currenciesNB: [],
    availableCurrency: [
      'RUB',
      'EUR',
      'USD'
    ],
    cssStyles: {
      bgc: '#dde9cb',
      maxWidth: '600px'
    }    
  };

  UNSAFE_componentWillMount() {
    
    // NB
    fetch( 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json' )
    // https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20190930&json
    .then( res => res.json() )
    .then( currenciesNB => {
      this.setState( { currenciesNB: currenciesNB } )
    } );

  }

  // choose currency
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

  // bgc
  changeBGC = ( e ) => {
    // console.log( e.target.value );
    let _cssStyles = this.state.cssStyles;

    _cssStyles.bgc = e.target.value;

    this.setState( {
      cssStyles: _cssStyles
    } );
  }

  componentDidUpdate() {

    // console.log( this.state );

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
        
        {/* Choose currency */}
        <div className="MxCurrencyExListOfCurrency">

          <h2>Choose currency</h2>
          <div>

            {currenciesNB}

          </div>
          
        </div>

        {/* color */}
        <div className="MxCurrencyBoxColor">

          <h2>Choose color</h2>

          <div>
          
            <MxCurrencyBoxColorBlock
              changeBGC={this.changeBGC}
            />

          </div>

        </div>

        {/* result */}
        <div className="MxCurrencyResult">

          <h2>Result</h2>
          <div>

            <CurrencyResult
              cssStyles={this.state.cssStyles}
              currencies={this.state.currenciesNB}
              availableCurrency={this.state.availableCurrency}
            />

          </div>

        </div>

      </div>
    );
  }

}

export default App;
