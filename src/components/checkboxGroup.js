import CheckBox from "./checkbox";

const CheckboxGroup = ({label, options, validator, errors}) => {  
  const buildElement = (el) => {
    return <CheckBox className="checkbox-group__checkbox"
      label={el.label}
      value={el.value}
      key={el.value}
      isInvalid={errors? true: false}
      validator={validator}
    />
  }
  const groupOptions = options.map((el) => buildElement(el));

  return (
    <div className="checkbox-group">
      <div className="error-wrapper-util">
      <p className="error-label-util">{ errors?.type === 'required' && "At least one of the options is required"}</p>
      </div>      
      <fieldset>
        <legend>{label}</legend>
        {
          groupOptions
        }
      </fieldset>
    </div>
  )
}

export default CheckboxGroup;