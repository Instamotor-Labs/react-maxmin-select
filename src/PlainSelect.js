import React from 'react';

class PlainSelect extends React.Component {
    render() {
        return (
            <select
                defaultValue={this.props.defaultValue || 'placeholder'}
                value={this.props.value}
                className={'Bdrs(4px) ' + this.props.className}
                onChange={this.props.onChange}
            >
                {this.props.children}
            </select>
        );
    }
}

export default PlainSelect;
