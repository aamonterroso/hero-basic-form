import "./scss/_button.scss";

const Button = ({label, bgColor, isSubmit, darkLabel, disabled}) => {
  let style = {
    backgroundColor: disabled ? 'gray' :bgColor,
    color: darkLabel ? "#000" : "#fff"
  };

  return (
    <div>
      <button className="button" 
        type={isSubmit ? 'submit' : 'button'} 
        style={style}
        disabled = {disabled}
      >
        {label}
      </button>
    </div>
  )
}

export default Button;