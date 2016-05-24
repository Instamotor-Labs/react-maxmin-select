import React from 'react';
import PlainSelect from './PlainSelect';

if(typeof window !== 'undefined') {
    require('./atomic.css');
}

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
       var options = this.props.options || [];
       var minCallback = this.props.minCallback;
       var maxCallback = this.props.maxCallback;
       var placeHolderMin = this.props.placeHolderMin;
       var placeHolderMax = this.props.placeHolderMax;
       var width = this.props.width;
       var SelectBox = this.props.selectBox;
       return (
           <div>
               <SelectBox
                   foo="bar"
                   value={this.state.min}
                   width={this.props.width}
                   className="IbBox Mt(16px)"
                   onChange={(ev)=>{
                       console.log('calling min callback ');
                       this.setState({min: ev.target.value});
                       minCallback(ev.target.value);
                   }}
               >
                   <option disabled value="placeholder">{placeHolderMin}</option>
                   {options.map((item, idx)=>{
                       return <OptionMin key={'min-' + idx} max={this.state.max} year={item.value} yearLabel={item.label}/>
                   })}
               </SelectBox>
               <span className="Mt(16px) D(ib) Mt(25px) Fz(14px) C(#94A2B5) Mstart(5px) Mend(5px)">to</span>
               <SelectBox
                   value={this.state.max}
                   width={this.props.width}
                   className="IbBox Mt(16px)"
                   onChange={(ev)=>{
                       this.setState({max: ev.target.value});
                       maxCallback(ev.target.value);
                   }}
               >
                   <option disabled value="placeholder">{placeHolderMax}</option>
                   {options.map((item, idx)=>{
                       return <OptionMax key={'max-' + idx} min={this.state.min} year={item.value} yearLabel={item.label}/>
                   })}
               </SelectBox>
           </div>
       );
   }
}

export default MaxMin;
