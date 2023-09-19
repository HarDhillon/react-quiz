import axios from "axios";

const getOptions = async () => {
    const response = await axios.get("https://opentdb.com/api_config.php")

    return response
}

export default getOptions