import React, {Component} from 'react';

export default class Modal extends Component {
    render() {
        const coverClass = this.props.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.props.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        
        const {details} = this.props;
        
        return (
            <div>
                <div className={containerClass}>
                    hi modal
                </div>
                <div className={coverClass} onClick={this.toggle}></div>
            </div>
        )
    }
}