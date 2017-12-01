import React, {Component} from 'react';
import autobind from 'autobind-decorator';

import Button from '../../components/button/index';

class ButtonDemo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    render() {
        return <div>
            <Button>button default</Button>
        </div>
    }
}

export default ButtonDemo;
