import React from 'react'
import PropTypes from 'prop-types'

const OptionMax = ({ value, min, label } = {}) =>
  <option value={value} disabled={min >= value}>{label}</option>

const OptionMin = ({ value, max, label } = {}) =>
  <option value={value} disabled={max <= value}>{label}</option>

class MaxMin extends React.Component {
  constructor (props) {
    super()
    this.state = {
      min: props.min || props.placeholderValue,
      max: props.max || props.placeholderValue
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.min !== this.state.min) {
      this.setState({min: (nextProps.min || nextProps.placeholderValue)})
    }
    if (nextProps.max !== this.state.max) {
      this.setState({max: (nextProps.max || nextProps.placeholderValue)})
    }
  }

  render () {
    const { selectBox: SelectBox, options, minCallback, maxCallback, placeHolderMin,
              placeHolderMax, placeholderValue, minProps, maxProps } = this.props
    return (
      <div>
        <SelectBox
          {...minProps}
          value={this.state.min}
          onChange={(ev) => {
            this.setState({min: ev.target.value})
            minCallback(ev.target.value)
          }}
                >
          <option disabled value={placeholderValue}>{placeHolderMin}</option>
          {options.map(item =>
            <OptionMin key={`min-${item.label}-${item.value}`} max={this.state.max} value={item.value} label={item.label} />
                    )}
        </SelectBox>
        {this.props.separator}
        <SelectBox
          {...maxProps}
          value={this.state.max}
          onChange={(ev) => {
            this.setState({max: ev.target.value})
            maxCallback(ev.target.value)
          }}
                >
          <option disabled value={placeholderValue}>{placeHolderMax}</option>
          {options.map(item =>
            <OptionMax key={`max-${item.label}-${item.value}`} min={this.state.min} value={item.value} label={item.label} />
                    )}
        </SelectBox>
      </div>
    )
  }
}

MaxMin.propTypes = {
  selectBox: PropTypes.func,
  options: PropTypes.array,
  minCallBack: PropTypes.func,
  maxCallBack: PropTypes.func,
  placeHolderMin: PropTypes.node,
  placeHolderMax: PropTypes.node,
  placeHolderValue: PropTypes.string,
  minProps: PropTypes.obj,
  maxProps: PropTypes.obj
}

MaxMin.defaultProps = {
  options: [],
  placeholderValue: 'placeholder'
}

export default MaxMin
