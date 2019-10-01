import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

class CurrencyBoxSizeBlock extends Component {

	state = {
		boxSize: ['100%', '600px', '300px']
	}

	render() {

		let inputSize = this.state.boxSize.map( ( _input, index ) => {

			let _checked = false;

			if( _input === this.props.cssStyles.maxWidth ) {

				_checked = true;

			}

			return (
				<div key={uuid()} className="MxCurrencyBlockSizeItem">					
					<input
						type="radio"
						name="sizeCurrencyBox"
						className="MxCurrencySizeInput"
						value={this.state.boxSize[index]}
						onChange={this.props.changeBoxSize.bind( this )}
						checked={_checked}
					/>
					<span>{this.state.boxSize[index]}</span>
				</div>
			)
		} );

		return (
			<div className="MxCurrencyBlockColor">

				{inputSize}

			</div>
		);
	}

}

CurrencyBoxSizeBlock.propTypes = {
	changeBoxSize: PropTypes.func.isRequired,
	cssStyles: PropTypes.object
};

export default CurrencyBoxSizeBlock;