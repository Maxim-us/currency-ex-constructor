import React, { Component } from 'react';

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
				<span>{this.props.currency.cc}</span>

			</div>
		);
	}

}

export default CurrencyItem;