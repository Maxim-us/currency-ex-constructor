import React, { Component } from 'react';
import uuid from 'react-uuid';
import CurrencyResultItem from './CurrencyResultItem';
import PropTypes from 'prop-types';

class CurrencyResult extends Component {

	render() {

		const availableCurrency = this.props.currencies.map( currency => {			

			if( this.props.availableCurrency.includes( currency.cc ) ) {
				
				return (
					<CurrencyResultItem 
						key={uuid()}
						currency={currency}
					/>
				)

			}

			return true;		

		} );

		// styles
		let border = 'none';

		if( this.props.cssStyles.bgc === '#ffffff' ) {
			border = '1px solid #333333';
		}

		const MxCurrencyResultBoxStyle = {
			backgroundColor: this.props.cssStyles.bgc,
			maxWidth: this.props.cssStyles.maxWidth,
			textAlign: 'center',
			borderRadius: '4px',
			paddingBottom: '1px',
			border: border,
			fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
			fontSize: '14px'
		};

		const MxCurrencyResultCenterBoxStyle = {
			backgroundColor: "#ffffff",
			margin: '4px',
			borderRadius: '4px'
		};

		const tableStyle = {
			width: '100%',
			fontSize: '14px',
    		textAlign: 'center'
		};

		// translation
		const _lang = this.props.appLanguage;
		let buy, sell, ukr = '';

		this.props.translate.filter( lang => {

			if( lang.lang === _lang ) {

				buy = lang.buy;
				sell = lang.sell;
				ukr = lang.ukr;

			}

			return true;

		} );

		return (
			<div className="MxCurrencyResultBox" style={MxCurrencyResultBoxStyle}>

				<a href="https://damvb.org/"><strong>Курс валют</strong></a> <span>в {ukr}, {this.props.date}</span>				

				<div style={MxCurrencyResultCenterBoxStyle}>

					<table style={tableStyle}>

						<tbody>

							<tr>

								<th></th>
								<th>{buy}</th>
								<th>{sell}</th>
								<th>НацБанк</th>

							</tr>

							{/* dinamical display */}	
							{availableCurrency}							

						</tbody>

					</table>					

				</div>

			</div>
		);
	}

}

CurrencyResult.propTypes = {
	date: PropTypes.string.isRequired,
	translate: PropTypes.array.isRequired,
	appLanguage: PropTypes.string.isRequired,
	currencies: PropTypes.array.isRequired,
	cssStyles: PropTypes.object,
	availableCurrency: PropTypes.array.isRequired
};

export default CurrencyResult;