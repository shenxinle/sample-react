import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';

import './index.scss';

class ModalCore extends Component {
    constructor(props) {
        super(props);
    }

    @autobind
    handleOk() {
        let { handleOk } = this.props;
        handleOk();
    }

    @autobind
    handleCancel() {
        let { handleCancel } = this.props;
        handleCancel();
    }

    render() {
        let { shown } = this.props;
        return (
            <div className={'r-modal ' + (shown ? '' : 'hide')}>
                <div className="r-modal-shade" onClick={this.handleCancel} />
                <div className="r-modal-content">
                    <div className="r-modal-header">Basic Modal</div>
                    <div className="r-modal-body">some contents</div>
                    <div className="r-modal-footer">
                        <button onClick={this.handleCancel}>取消</button>
                        <button onClick={this.handleOk}>确定</button>
                    </div>
                </div>
            </div>
        );
    }
}

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.shown) {
            this.mountOrUpdateModal();
        }
    }

    componentDidUpdate() {
        this.mountOrUpdateModal();
    }

    @autobind
    mountOrUpdateModal() {
        var div;
        var options = {
            shown: this.props.shown,
            handleOk: this.props.handleOk,
            handleCancel: this.props.handleCancel,
        };
        if (this.modalMountedContainer) {
            // update
            div = this.modalMountedContainer;
        } else {
            // mount
            div = document.createElement('div');
            div.className = 'r-xxx-container';
            document.body.appendChild(div);
            this.modalMountedContainer = div;
        }
        ReactDOM.render(<ModalCore {...options} />, div);
    }

    render() {
        return null;
    }
}

Modal.propTypes = {
    shown: PropTypes.bool,
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func,
};
Modal.defaultProps = {
    shown: false,
};

export default Modal;
