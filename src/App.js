import React, { Component } from 'react';
import uuid from 'react-uuid';
import CurrencyItem from './components/CurrencyItem';
import CurrencyResult from './components/CurrencyResult';
import CurrencyBoxColorBlock from './components/CurrencyBoxColorBlock';
import CurrencyBoxSizeBlock from './components/CurrencyBoxSizeBlock';

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
    },
    date: ''  
  };

  UNSAFE_componentWillMount() {
    
    // NB
    fetch( 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json' )
    // https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20190930&json
    .then( res => res.json() )
    .then( currenciesNB => {
      this.setState( { currenciesNB: currenciesNB } )
    } );

    // current date
    let today = new Date();    
    let date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear();
    
    this.setState( {
      date: date
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

    let _cssStyles = this.state.cssStyles;

    _cssStyles.bgc = e.target.value;

    this.setState( {
      cssStyles: _cssStyles
    } );

  }

  // size
  changeBoxSize = ( e ) => {
    let _cssStyles = this.state.cssStyles;

    _cssStyles.maxWidth = e.target.value;

    this.setState( {
      cssStyles: _cssStyles
    } );
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
          
            <CurrencyBoxColorBlock
              changeBGC={this.changeBGC}
              cssStyles={this.state.cssStyles}
            />

          </div>

        </div>

        {/* size */}
        <div className="MxCurrencyBoxSize">

          <h2>Choose size</h2>

          <div>
          
            <CurrencyBoxSizeBlock
              changeBoxSize={this.changeBoxSize}
              cssStyles={this.state.cssStyles}
            />

          </div>

        </div>

        {/* result */}
        <div className="MxCurrencyResult">

          <h2>Result</h2>
          <div>

            <CurrencyResult
              date={this.state.date}
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
