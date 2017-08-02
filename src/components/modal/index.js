import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ModalCore extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <div className="r-modal-shade"></div>
                <div className="r-modal-content">
                    <div className="r-modal-header">
                        Basic Modal
                    </div>
                    <div className="r-modal-body">
                        some contents
                    </div>
                    <div className="r-modal-footer">
                        <button>取消</button>
                        <button>确定</button>
                    </div>
                </div>
            </div>
        )
    }
}

class Modal extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        var div = document.createElement('div')
        div.className = 'r-modal'
        document.body.appendChild(div)
        ReactDOM.render(<ModalCore />, div)
    }
    componentWillUnmount() {

    }
    render() {
        return null
    }
}

export default Modal;