const Button = ({label, bgColor, isSubmit, darkLabel, disabled, onClick}) => {
  let style = {
    backgroundColor: disabled ? '#d6d6d6' :bgColor,
    color: darkLabel ? "#000" : "#fff"
  };

  return (
    <div className="button-container">
      <button className="button box-shaddow-util input-label-util" 
        type={isSubmit ? 'submit' : 'button'} 
        style={style}
        disabled = {disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}

export default Button;