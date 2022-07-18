const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            onChange={handleClick}
            checked={isChecked}
            className="default:ring-2"
        />
    )
}

export default Checkbox
