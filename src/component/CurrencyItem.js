import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyItem extends Component {

	render() {

		let checkbox = '';

		if( this.props.availableCurrency.includes( this.props.currency.cc ) ) {
			checkbox = 'checked';
		}

		const cc = this.props.currency.cc;

		return (
			<div className="MxCurrencyItem">

				<input type="checkbox" checked={checkbox} onChange={this.props.markCurrency.bind(this, cc)} />
				<strong>{this.props.currency.cc}</strong>
				<span>{this.props.currency.txt}</span>

			</div>
		);
	}

}

CurrencyItem.propTypes = {
	currency: PropTypes.object.isRequired,
	markCurrency: PropTypes.func.isRequired,
	availableCurrency: PropTypes.array.isRequired
};

export default CurrencyItem;