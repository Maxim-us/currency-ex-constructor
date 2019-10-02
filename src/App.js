import React, { Component } from 'react';
import uuid from 'react-uuid';
import CurrencyItem from './components/CurrencyItem';
import CurrencyResult from './components/CurrencyResult';
import CurrencyBoxColorBlock from './components/CurrencyBoxColorBlock';
import CurrencyBoxSizeBlock from './components/CurrencyBoxSizeBlock';
import CurrencyCodeSnippet from './components/CurrencyCodeSnippet';
import CurrencyBoxLanguageBlock from './components/CurrencyBoxLanguageBlock';

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
    date: '',
    translate: [
      {
        lang: 'ru',
        buy: 'Покупка',
        sell: 'Продажа',
        ukr: 'Украине'
      },
      {
        lang: 'ua',
        buy: 'Купівля',
        sell: 'Продаж',
        ukr: 'Україні'
      }
    ],
    appLanguage: 'ru'
  };

  UNSAFE_componentWillMount() {

    let today = new Date();
    
    // NB
    fetch( 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json' )
    // https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20190930&json
    .then( res => res.json() )
    .then( currenciesNB => {

      let _currenciesNB = currenciesNB;

      if( currenciesNB.length < 3 ) {

          let dayNumber = today.getDate();

          if( dayNumber < 10 ) {

            dayNumber = '0'+dayNumber;

          }

          let todatDate = today.getFullYear()+''+(today.getMonth()+1)+''+dayNumber;

          fetch( 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date='+todatDate+'&json' )
          .then( res2 => res2.json() )
          .then( currenciesNB2 => {

            this.setState( { currenciesNB: currenciesNB2 } );

          } );

      } else {

        this.setState( { currenciesNB: _currenciesNB } );

      }
      
    } );

    // current date    
    let date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear();
    
    // date
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

  // lang
  changeBoxLang = ( e ) => {

    let _appLanguage = e.target.value;

    this.setState( {
      appLanguage: _appLanguage
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

          <h4>Выберите валюту</h4>
          <div>

            {currenciesNB}

          </div> 
          
        </div>

        {/* color */}
        <div className="MxCurrencyBoxColor">

          <h4>Выберите цвет блока</h4>

          <div>
          
            <CurrencyBoxColorBlock
              changeBGC={this.changeBGC}
              cssStyles={this.state.cssStyles}
            />

          </div>

        </div>

        {/* size */}
        <div className="MxCurrencyBoxSize">

          <h4>Выберите размер блока</h4>

          <div>
          
            <CurrencyBoxSizeBlock
              changeBoxSize={this.changeBoxSize}
              cssStyles={this.state.cssStyles}
            />

          </div>

        </div>

      {/* language */}
        <div className="MxCurrencyBoxSize">

          <h4>Выберите язык</h4>

          <div>
          
            <CurrencyBoxLanguageBlock
              changeBoxLang={this.changeBoxLang}
              appLanguage={this.state.appLanguage}
            />

          </div>

        </div>

        {/* result */}
        <div className="MxCurrencyResult">

          <h4>Результат</h4>
          <div>

            <CurrencyResult
              translate={this.state.translate}
              appLanguage={this.state.appLanguage}
              date={this.state.date}
              cssStyles={this.state.cssStyles}
              currencies={this.state.currenciesNB}
              availableCurrency={this.state.availableCurrency}
            />

          </div>

        </div>

        {/* code snippet */}
        <div className="MxCurrencyCodeSnippet">

          <h4>Код для вставки</h4>
          <div>

            <CurrencyCodeSnippet
              appLanguage={this.state.appLanguage}
              availableCurrency={this.state.availableCurrency}
              cssStyles={this.state.cssStyles}
            />

          </div>

        </div>

      </div>
    );
  }

}

export default App;
