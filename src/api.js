import axios from "axios";

const searchImages=async (term) =>{
    const response = await axios.get("https://api.unsplash.com/search/photos" , {
    headers: {
        Authorization:'Client-ID 2V4ZBcHGfwhYxBkvnqBFv_8KmA0jz4iKTzB_yWJa76U'
    },
    params: {
        query: term,
    }
    });
    console.log(response);

    return response.data.results;
};

export default searchImages;