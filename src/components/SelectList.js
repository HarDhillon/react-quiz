function SelectList({ config }) {

    const renderedOptions = config.values.map((option) => {
        return <option key={option.value} value={option.value}>{option.label}</option>
    })

    return <>
        <label>{config.label}</label>
        <select name={config.label}>{renderedOptions}</select>
    </>
}

export default SelectList