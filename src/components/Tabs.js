import { useState } from "react"

function Tabs({ items }) {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        const currentTab = index === activeIndex

        return (
            <div onClick={() => handleClick(index)} key={item.label}>
                <h3>{item.label}</h3>
                <div>
                    {currentTab && item.content}
                </div>
            </div>
        )
    })

    return (
        <div>{renderedItems}</div>
    )
}

export default Tabs