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
      min: props.min || props.placeholderValue,
      max: props.max || props.placeholderValue,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.min !== this.state.min) {
      this.setState({ min: (nextProps.min || nextProps.placeholderValue) })
    }
    if (nextProps.max !== this.state.max) {
      this.setState({ max: (nextProps.max || nextProps.placeholderValue) })
    }
  }

  render() {
    const { selectBox: SelectBox, options, minCallback, maxCallback, separator,
      placeholderMin, placeholderMax, placeholderValue, minProps, maxProps } = this.props
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
          <option disabled value={placeholderValue}>{placeholderMin}</option>
          {options.map(item =>
            <OptionMin key={`min-${item.label}-${item.value}`} max={this.state.max} value={item.value} label={item.label} />,
          )}
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
          <option disabled value={placeholderValue}>{placeholderMax}</option>
          {options.map(item =>
            <OptionMax key={`max-${item.label}-${item.value}`} min={this.state.min} value={item.value} label={item.label} />,
          )}
        </SelectBox>
      </div>
    )
  }
}

MaxMin.propTypes = {
  max: PropTypes.number.isRequired,
  maxCallback: PropTypes.func,
  maxProps: PropTypes.object.isRequired,
  min: PropTypes.number.isRequired,
  minCallback: PropTypes.func,
  minProps: PropTypes.object.isRequired,
  options: PropTypes.array,
  placeholderMax: PropTypes.node,
  placeholderMin: PropTypes.node,
  placeholderValue: PropTypes.string,
  selectBox: PropTypes.func.isRequired,
  separator: PropTypes.node,
}

MaxMin.defaultProps = {
  options: [],
  placeholderValue: 'placeholder',
  placeholderMin: null,
  placeholderMax: null,
  separator: null,
  maxCallback: () => {},
  minCallback: () => {},
}

export default MaxMin
