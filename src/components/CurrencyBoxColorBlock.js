import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

class CurrencyBoxColorBlock extends Component {

	state = {
		BGcolors: ['#dde9cb', '#f7e4e4', '#a9a9f3', '#ffffff']
	}

	render() {

		let inputColors = this.state.BGcolors.map( ( _input, index ) => {

			let _checked = false;

			if( _input === this.props.cssStyles.bgc ) {

				_checked = true;

			}

			// style
			let _border = 'none';

			if( _input === '#ffffff' ) {
				_border = '1px solid #333333';
			}

			const spanStyle = {
				background: this.state.BGcolors[index],
				border: _border
			};

			return (
				<div key={uuid()} className="MxCurrencyBlockColorItem">
					<span style={spanStyle}></span>
					<input
						type="radio"
						name="bgcCurrencyBox"
						className="MxCurrencyColorInput"
						value={this.state.BGcolors[index]}
						onChange={this.props.changeBGC.bind( this )}
						checked={_checked}
					/>
				</div>
			)
		} );

		return (
			<div className="MxCurrencyBlockColor">

				{inputColors}

			</div>
		);
	}

}

CurrencyBoxColorBlock.propTypes = {
	changeBGC: PropTypes.func.isRequired,
	cssStyles: PropTypes.object
};

export default CurrencyBoxColorBlock;