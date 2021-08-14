import "./scss/_checkbox.scss";
import CheckBox from "./checkbox";


const CheckboxGroup = ({label, options, validator, errors, setter, getter}) => {
  
  const buildElement = (el) => {
    return <CheckBox className="checkbox"
      label={el.label}
      value={el.value}
      key={el.value}
      validator={validator}
      setValue={setter}
      getValue={getter}
    />
  }
  const groupOptions = options.map((el) => buildElement(el));

  return (
    <div className="checkboxGroup">
      <fieldset>
        <legend>{label}</legend>
        { errors?.type === 'required' && "Please choose one of the followings"}
        {
          groupOptions
        }
      </fieldset>
    </div>
  )
}

export default CheckboxGroup;