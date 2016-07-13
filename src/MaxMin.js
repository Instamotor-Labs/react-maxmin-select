import React, {PropTypes} from 'react';

class OptionMax extends React.Component {
    render() {
        return (
            <option value={this.props.year} disabled={(this.props.min > this.props.year) ? true : false}>{this.props.yearLabel}</option>
        );
    }
}

class OptionMin extends React.Component {
    render() {
        return (
            <option value={this.props.year} disabled={(this.props.max < this.props.year) ? true : false}>{this.props.yearLabel}</option>
        );
    }
}

class MaxMin extends React.Component {
    constructor(props) {
        super();
        this.state = {
            min: props.min || 'placeholder',
            max: props.max || 'placeholder'
        };
    }

    render() {
        var SelectBox = this.props.selectBox;
        var options = this.props.options;
        var minCallback = this.props.minCallback;
        var maxCallback = this.props.maxCallback;
        var placeHolderMin = this.props.placeHolderMin;
        var placeHolderMax = this.props.placeHolderMax;
        let placeholderValue = this.props.placeholderValue;

        return (
            <div>
                <SelectBox
                    {...this.props.minProps}
                    value={this.state.min}
                    onChange={(ev)=>{
                        this.setState({min: ev.target.value});
                        minCallback(ev.target.value);
                    }}
                >
                    <option disabled value={placeholderValue}>{placeHolderMin}</option>
                    {options.map((item, idx)=>{
                        return <OptionMin key={'min-' + idx} max={this.state.max} year={item.value} yearLabel={item.label}/>
                    })}
                </SelectBox>
               {this.props.separator}
                <SelectBox
                    {...this.props.maxProps}
                    value={this.state.max}
                    onChange={(ev)=>{
                        this.setState({max: ev.target.value});
                        maxCallback(ev.target.value);
                    }}
                >
                    <option disabled value={placeholderValue}>{placeHolderMax}</option>
                    {options.map((item, idx)=>{
                        return <OptionMax key={'max-' + idx} min={this.state.min} year={item.value} yearLabel={item.label}/>
                    })}
                </SelectBox>
            </div>
        );
   }
}

MaxMin.propTypes = {
    selectBox: PropTypes.func,
    options: PropTypes.array,
    minCallBack: PropTypes.func,
    maxCallBack: PropTypes.func,
    placeHolderMin: PropTypes.node,
    placeHolderMax: PropTypes.node,
    placeHolderValue: PropTypes.string
}

MaxMin.defaultProps = {
    options: [],
    placeHoldervalue: 'placeholder'
}

export default MaxMin;
