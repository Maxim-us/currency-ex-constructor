import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

class CurrencyBoxLanguageBlock extends Component {

	state = {
		languages: ['ru', 'ua']
	}

	render() {

		let inputLang = this.state.languages.map( ( _input, index ) => {

			let _checked = false;

			if( _input === this.props.appLanguage ) {

				_checked = true;

			}

			return (
				<div key={uuid()} className="MxCurrencyBlockLangItem">					
					<input
						type="radio"
						name="langCurrencyBox"
						className="MxCurrencyLangInput"
						value={this.state.languages[index]}
						onChange={this.props.changeBoxLang.bind( this )}
						checked={_checked}
					/>
					<span>{this.state.languages[index]}</span>
				</div>
			)
		} );

		return (
			<div className="MxCurrencyBlockLanguage">

				{inputLang}

			</div>
		);
	}

}

CurrencyBoxLanguageBlock.propTypes = {
	changeBoxLang: PropTypes.func.isRequired,
	appLanguage: PropTypes.string.isRequired
};

export default CurrencyBoxLanguageBlock;