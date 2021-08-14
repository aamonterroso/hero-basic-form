import "./scss/_selectDropdown.scss";

const SelectDD = ({name, placeholder, label, options, required, validator, errors}) => {
  
  const selectOptions = options.map((el) => <option key={el} value={el}>{el}</option>);

  return (
    <div className="selectDropdown">
      <label className="inputText__label" htmlFor={name}>
        {label}{required ? "*" : ""}
      </label>
      {errors?.type === 'required' && `${label} is required`}
      <select name={name} {...validator}>
        <option value="">{placeholder}</option>
        {
          selectOptions
        }
      </select>
    </div>
  )
}

export default SelectDD;
