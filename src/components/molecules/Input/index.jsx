/* eslint-disable react/prop-types */
import "./style.sass";
const Input = ({ type, name, id, placeholder }) => {
    
  return (
    <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
    />
  )
}

export default Input