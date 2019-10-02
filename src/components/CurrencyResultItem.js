import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
100.0108 (%k)

kup = ( nb * (%k) ) / 100

___________________

101.2506 (%p)

prod = ( nb * (%p) ) / 100
*/

class CurrencyResultItem extends Component {

	render() {

		const currBuy = parseFloat( ( this.props.currency.rate * 100.0108 ) / 100 ).toFixed( 4 );

		const currSell = parseFloat( ( this.props.currency.rate * 101.2506 ) / 100 ).toFixed( 4 );

		return (

			<tr>

				<td><strong>{this.props.currency.cc}</strong></td>
				<td>{currBuy}</td>
				<td>{currSell}</td>
				<td>{parseFloat( this.props.currency.rate ).toFixed( 4 )}</td>

			</tr>
			
		);
	}

}

CurrencyResultItem.propTypes = {
	currency: PropTypes.object.isRequired
};

export default CurrencyResultItem;