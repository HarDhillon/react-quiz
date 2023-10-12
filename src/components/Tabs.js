import { useState } from "react"
import HighScoreTable from "./HighScoreTable"

function Tabs({ items }) {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        const activeTab = index === activeIndex

        return (
            <div onClick={() => handleClick(index)} key={item.label} className="cursor-pointer">
                <h3>{item.label}</h3>
                <div>
                    {activeTab && <HighScoreTable users={item.content} />}
                </div>
            </div>
        )
    })

    return (
        <div className="flex justify-between">{renderedItems}</div>
    )
}

export default Tabs