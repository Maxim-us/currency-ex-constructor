import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyShortCode extends Component {

	// code snippet
	mxCreateShortcode() {

	    const availableCurrency = this.props.availableCurrency.join( ',' );

	    const maxWidth = this.props.cssStyles.maxWidth;

	    const bgc = this.props.cssStyles.bgc;

	    const lang = this.props.appLanguage;

	    const codeSnippet = '[mx_currency_exchange_box data-currencies="' + availableCurrency + '" data-color="' + bgc + '" data-maxwidth="' + maxWidth + '" data-lang="' + lang + '"]';

		return codeSnippet;

	}	
	
	render() {

		const shortCodeStyle = {
			display: 'inline-block',
		    background: '#fafafa',
		    padding: '10px 20px'
		};

		return (
			<div className="CurrencyCodeSnippet" style={shortCodeStyle}>

				<span>{this.mxCreateShortcode()}</span>

			</div>
		);
	}

}

CurrencyShortCode.propTypes = {
	cssStyles: PropTypes.object.isRequired,
	availableCurrency: PropTypes.array.isRequired,
	appLanguage: PropTypes.string.isRequired
};

export default CurrencyShortCode;