import React from 'react'
import PropTypes from 'prop-types'

const OptionMax = ({ value, min, label } = {}) =>
  <option value={value} disabled={min >= value}>{label}</option>

const OptionMin = ({ value, max, label } = {}) =>
  <option value={value} disabled={max <= value}>{label}</option>

class MaxMin extends React.Component {
  constructor(props) {
    super()
    this.state = {
      min: props.min || props.placeHolderValue,
      max: props.max || props.placeHolderValue,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.min !== this.state.min) {
      this.setState({ min: (nextProps.min || nextProps.placeHolderValue) })
    }
    if (nextProps.max !== this.state.max) {
      this.setState({ max: (nextProps.max || nextProps.placeHolderValue) })
    }
  }

  render() {
    const {
      selectBox: SelectBox, options, minCallback, maxCallback, separator,
      placeHolderMin, placeHolderMax, placeHolderValue, minProps, maxProps,
    } = this.props
    return (
      <div>
        <SelectBox
          {...minProps}
          value={this.state.min}
          onChange={(ev) => {
            this.setState({ min: ev.target.value })
            minCallback(ev.target.value)
          }}
        >
          <option disabled value={placeHolderValue}>{placeHolderMin}</option>
          {options.map(item =>
            <OptionMin key={`min-${item.label}-${item.value}`} max={this.state.max} value={item.value} label={item.label} />)}
        </SelectBox>
        {separator}
        <SelectBox
          {...maxProps}
          value={this.state.max}
          onChange={(ev) => {
            this.setState({ max: ev.target.value })
            maxCallback(ev.target.value)
          }}
        >
          <option disabled value={placeHolderValue}>{placeHolderMax}</option>
          {options.map(item =>
            <OptionMax key={`max-${item.label}-${item.value}`} min={this.state.min} value={item.value} label={item.label} />)}
        </SelectBox>
      </div>
    )
  }
}

MaxMin.propTypes = {
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxCallback: PropTypes.func,
  maxProps: PropTypes.object.isRequired,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minCallback: PropTypes.func,
  minProps: PropTypes.object.isRequired,
  options: PropTypes.array,
  placeHolderMax: PropTypes.node,
  placeHolderMin: PropTypes.node,
  placeHolderValue: PropTypes.string,
  selectBox: PropTypes.func.isRequired,
  separator: PropTypes.node,
}

MaxMin.defaultProps = {
  max: '',
  maxCallback: () => {},
  min: '',
  minCallback: () => {},
  options: [],
  placeHolderMax: null,
  placeHolderMin: null,
  placeHolderValue: 'placeHolder',
  separator: null,
}

export default MaxMin
