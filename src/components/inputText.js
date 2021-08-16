const InputText = ({name, label, ariaLabel, required, validator, errors}) => {
  return (
    <div className="input-text">
      <div className="error-wrapper-util">
        <p className="error-label-util">{errors?.type === 'required' && `${label.toLowerCase()} is required`}</p>
        <p className="error-label-util">{errors?.type === 'pattern' && errors.message}</p>
      </div>
      <div className="input-text__label-wrapper">
        <label className="input-label-util" htmlFor={name}>
          {label}{required ? "*" : ""}
        </label>
      </div>
      <div className="input-text___input-wrapper">
        <input 
          className={`input-text__field control-style-util ${errors ? 'control-invalid-util':'control-valid-util'}`}
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
