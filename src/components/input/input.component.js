const Input = ( { id, label, type, value, setValue } ) => {
    return (
        <label htmlFor={id}>
            <span>{label}</span>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={( { target } ) => setValue( target.value )}
            />
        </label>
    )
}

export default Input