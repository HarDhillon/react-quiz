import { GiInfo } from "react-icons/gi";

function Info({ content, className }) {



    return <div className={`group absolute ${className}`}>
        <GiInfo className="text-xl" />
        <div className="text-sm hidden group-hover:block absolute p-5 bg-gray-200 rounded w-[300px] top-7">
            {content}
        </div>
    </div>
}

export default Info