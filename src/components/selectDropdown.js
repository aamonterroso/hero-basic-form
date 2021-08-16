const SelectDD = ({name, placeholder, label, options, required, validator, errors}) => {
  
  const selectOptions = options.map((el) => <option key={el} value={el}>{el}</option>);

  return (
    <div className="selectdd-container">
      <div className="error-wrapper-util">
        <p className="error-label-util">{errors?.type === 'required' && `${label} is required`}</p>
      </div>
      <div className="selectdd-container__control-wrapper">
        <label className="input-label-util selectdd-container__label" htmlFor={name}>
          {label}{required ? "*" : ""}
        </label>
        <select name={name} {...validator} 
          className={`selectdd-container__select control-style-util ${errors? 'control-invalid-util':'control-valid-util'}`}>
          <option value="">{placeholder}</option>
          {
            selectOptions
          }
        </select>
      </div>
    </div>
  )
}

export default SelectDD;
