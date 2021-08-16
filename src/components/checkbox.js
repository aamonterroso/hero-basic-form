const Checkbox= ({label, value, validator, isInvalid}) => {

  return (
    <div className="checkbox-element">
      <label className="checkbox-container input-label-util" htmlFor={value}>
        <p>{label}</p>
        <input type="checkbox" className="checkbox-container__checkbox"
          value={value}
          key={value}
          {...validator}
          id={value}
        />
        <span className={`checkmark control-style-util ' ${isInvalid ? 'control-invalid-util':'control-valid-util'}`}></span>
      </label>
    </div>
  )
}

export default Checkbox;