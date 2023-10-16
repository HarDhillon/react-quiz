import { useState } from "react"
import HighScoreTable from "./HighScoreTable"

function Tabs({ items }) {

    // console.log(items)

    const [activeIndex, setActiveIndex] = useState(0)
    const activeItem = items[activeIndex].content

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        return (
            <div onClick={() => handleClick(index)} key={item.label} className={`cursor-pointer px-3 py-2 ${index === activeIndex ? 'active-tab' : ''}`}>
                <h3>{item.label}</h3>
            </div>
        )
    })

    return (
        <div className="flex justify-center">
            <div>
                <div className="labels flex justify-between mb-10">
                    {renderedItems}
                </div>
                <div className="content flex justify-center">
                    <HighScoreTable users={activeItem} />
                </div>

            </div>
        </div>
    )
}

export default Tabs