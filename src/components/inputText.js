import "./scss/_inputText.scss";

const InputText = ({name, label, ariaLabel, required, validator, errors}) => {
  
  return (
    <div className="inputText">
      <div className="inputText__labelWrapper">        
        <label className="inputText__label" htmlFor={name}>
          {label}{required ? "*" : ""}
        </label>
      </div>
      <div className="inputText_inputWrapper">
        {errors?.type === 'required' && `${label} is required`}
        {errors?.type === 'pattern' && errors.message}
        <input 
          className="inputText_input"
          name={name}
          id={name}
          aria-label={ariaLabel}
          {...validator}
        />
      </div>
    </div>
  )
}

export default InputText;
