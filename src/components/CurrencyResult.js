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
			border: border
		};

		const MxCurrencyResultCenterBoxStyle = {
			backgroundColor: "#ffffff",
			margin: '4px',
			borderRadius: '4px'
		};

		return (
			<div className="MxCurrencyResultBox" style={MxCurrencyResultBoxStyle}>

				<span>Курс валют в Украине {this.props.date}</span>				

				<div style={MxCurrencyResultCenterBoxStyle}>

					<table style={{width: '100%'}}>

						<tbody>

							<tr>

								<th></th>
								<th>Покупка</th>
								<th>Продажа</th>
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
	currencies: PropTypes.array.isRequired,
	cssStyles: PropTypes.object,
	availableCurrency: PropTypes.array.isRequired
};

export default CurrencyResult;