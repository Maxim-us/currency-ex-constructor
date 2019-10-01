import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MxCurrencyBoxColorBlock extends Component {

	render() {

		return (
			<div className="MxCurrencyBlockColor">

				<div className="MxCurrencyBlockColorItem">
					<span style={{background: '#dde9cb'}}></span>
					<input type="radio" name="bgcCurrencyBox" className="MxCurrencyColorInput" value="#dde9cb" onChange={this.props.changeBGC.bind( this )} />
				</div>

				<div className="MxCurrencyBlockColorItem">
					<span style={{background: '#f7e4e4'}}></span>
					<input type="radio" name="bgcCurrencyBox" className="MxCurrencyColorInput" value="#f7e4e4" onChange={this.props.changeBGC.bind( this )} />
				</div>

				<div className="MxCurrencyBlockColorItem">
					<span style={{background: '#ffffff', border: '1px solid #333333'}}></span>
					<input type="radio" name="bgcCurrencyBox" className="MxCurrencyColorInput" value="#ffffff" onChange={this.props.changeBGC.bind( this )} />
				</div>
				
			</div>
		);
	}

}

export default MxCurrencyBoxColorBlock;