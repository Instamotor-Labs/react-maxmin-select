import React from 'react';
import ThemedSelect from './ThemedSelect';

class OptionMax extends React.Component {
    render() {
        return (
            <option value={this.props.year} disabled={(this.props.min> this.props.year) ? true : false}>{this.props.yearLabel}</option>
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
    constructor() {
        super();
        this.state = {};
    }
   render() {
       var options = this.props.options || [];
       var minCallback = this.props.minCallback;
       var maxCallback = this.props.maxCallback;
       var placeHolderMin = this.props.placeHolderMin;
       var placeHolderMax = this.props.placeHolderMax;
       var width = this.props.width;
       return (
           <div>
               <ThemedSelect
                   value={this.props.min || 'placeholder'}
                   style={{width: this.props.width}}
                   className="W(1/2) IbBox Mt(16px)"
                   onChange={(ev)=>{
                       this.setState({min: ev.target.value});
                       minCallback(ev.target.value);
                   }}
               >
                   <option disabled value="placeholder">{placeHolderMin}</option>
                   {options.map((item)=>{
                       return <OptionMin max={this.state.max} year={item.value} yearLabel={item.label}/>
                   })}
               </ThemedSelect>
               <span className="Mt(16px) D(ib) Mt(25px) Fz(14px) C(#94A2B5) Mstart(5px) Mend(5px)">to</span>
               <ThemedSelect
                   value={this.props.max || 'placeholder'}
                   style={{width: this.props.width}}
                   className="IbBox Mt(16px)"
                   onChange={(ev)=>{
                       this.setState({max: ev.target.value});
                       maxCallback(ev.target.value);
                   }}
               >
                   <option disabled value="placeholder">{placeHolderMax}</option>
                   {options.map((item)=>{
                       return <OptionMax min={this.state.min} year={item.value} yearLabel={item.label}/>
                   })}
               </ThemedSelect>
           </div>
       );
   }
}

export default MaxMin;
