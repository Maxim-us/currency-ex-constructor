import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyCodeSnippet extends Component {

	// code snippet
	mxCreateCodeSnippet() {

	    const availableCurrency = this.props.availableCurrency.join( ',' );

	    const maxWidth = this.props.cssStyles.maxWidth;

	    const bgc = this.props.cssStyles.bgc;

	    const lang = this.props.appLanguage;

	    const codeSnippet = '<div id="mxCurrencyExCreateBox" data-currencies="' + availableCurrency + '" data-color="' + bgc + '" data-maxwidth="' + maxWidth + '" data-lang="' + lang + '"></div><script>!function(a){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],c=0,l=[];c<n.length;c++)t=n[c],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&l.push(i[t][0]),i[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r]);for(s&&s(e);l.length;)l.shift()();return p.push.apply(p,u||[]),f()}function f(){for(var e,r=0;r<p.length;r++){for(var t=p[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==i[u]&&(n=!1)}n&&(p.splice(r--,1),e=c(c.s=t[0]))}return e}var t={},i={1:0},p=[];function c(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=a,c.c=t,c.d=function(e,r,t){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(r,e){if(1&e&&(r=c(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)c.d(t,n,function(e){return r[e]}.bind(null,n));return t},c.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="/";var r=window["webpackJsonpcurrency-ex-create-box"]=window["webpackJsonpcurrency-ex-create-box"]||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;f()}([])</script><script src="/static/js/2.501e8fea.chunk.js"></script><script src="/static/js/main.f818a5a0.chunk.js"></script>';

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