function SelectList({options}) {

    const renderedOptions = options.map((option) => {
        return <option key={option.value} value={option.value}>{ option.label }</option>
    })

    return <select>{ renderedOptions }</select>
}

export default SelectList