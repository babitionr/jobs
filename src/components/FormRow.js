const FormRow = ({type,name,value,handleChange,labelText}) => {
    return (            
        <div className="form-row">
        <span htmlFor="name" className="form-label">
            {name}
        </span>
        <input 
            id={name}
            type={type} 
            name={name} 
            value={value} 
            onChange={handleChange} 
            className="form-input"
        />
        </div>
    )
}
export default FormRow