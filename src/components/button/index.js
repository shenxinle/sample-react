import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';

import './index.scss';

class Button extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <button>
            {this.props.children}
        </button>
    )
  }
}

export default Button;