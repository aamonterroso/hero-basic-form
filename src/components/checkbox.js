import "./scss/_checkbox.scss";

const Checkbox= ({name, label, value, validator}) => {

  return (
    <div>
      <label className="formLabel" htmlFor="chkbx">
        {label}
      </label>
      <input type="checkbox"
        value={value}
        key={value}
        {...validator}
      />
    </div>
  )
}

export default Checkbox;