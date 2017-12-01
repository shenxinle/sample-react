import React, {Component} from 'react';
import autobind from 'autobind-decorator';

import Modal from '../../components/modal/index';

class ModalDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShown: false
        }
    }

    componentDidMount() {}

    @autobind
    openModal() {
        this.setState((prevState) => {
            return {modalShown: true}
        })
    }

    @autobind
    handleOk() {
        this.setState((prevState) => {
            return {modalShown: false}
        })
    }

    @autobind
    handleCancel() {
        this.setState((prevState) => {
            return {modalShown: false}
        })
    }

    render() {
        let options = {
            shown: this.state.modalShown,
            handleOk: this.handleOk,
            handleCancel: this.handleCancel
        }
        return <div>
            <button onClick={this.openModal}>show modal</button>
            <Modal {...options}></Modal>
        </div>
    }
}

export default ModalDemo;
