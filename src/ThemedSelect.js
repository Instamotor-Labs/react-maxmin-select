import React from 'react';

class ThemedSelect extends React.Component {
    render() {
        return (
            <select
                defaultValue={this.props.defaultValue || 'placeholder'}
                value={this.props.value}
                className={'Bdrs(4px) ' + this.props.className}
                onChange={this.props.onChange}
                style={Object.assign({
                    backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/im-web-assets-dev/dropdowncaret.svg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                    backgroundPosition: '100% 50%',
                    backgroundColor: 'transparent',
                    height: '32px',
                    paddingLeft: '10px',
                    paddingRight: '22px',
                    border: '1px solid #C3CCDA',
                    fontSize: '14px',
                    color: '#94A2B5'
                }, this.props.style)}
            >
                {this.props.children}
            </select>
        );
    }
}

export default ThemedSelect;
