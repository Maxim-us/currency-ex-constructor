import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyCodeSnippet extends Component {

	// code snippet
	mxCreateCodeSnippet() {

	    const availableCurrency = this.props.availableCurrency.join( ',' );

	    const maxWidth = this.props.cssStyles.maxWidth;

	    const bgc = this.props.cssStyles.bgc;

	    const lang = this.props.appLanguage;

	    const codeSnippet = '<div data-currencies="' + availableCurrency + '" data-color="' + bgc + '" data-maxwidth="' + maxWidth + '" data-lang="' + lang + '"></div>';

		return codeSnippet;

	}	
	
	render() {

		return (
			<div className="CurrencyCodeSnippet">

				<textarea readOnly value={this.mxCreateCodeSnippet()} />

			</div>
		);
	}

}

CurrencyCodeSnippet.propTypes = {
	cssStyles: PropTypes.object.isRequired,
	availableCurrency: PropTypes.array.isRequired,
	appLanguage: PropTypes.string.isRequired
};

export default CurrencyCodeSnippet;