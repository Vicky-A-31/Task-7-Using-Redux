

function Input({label, id, placeholder, type, input}) {
    
  return (
    <>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type={type} placeholder={placeholder} id={id} name={input.name} />
    </>
  )
}

export default Input