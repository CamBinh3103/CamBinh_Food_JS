
const BASE_URL = "https://64e1a525ab00373588184ea9.mockapi.io/food"

let getList = () => {
    return axios({
        url: BASE_URL,
        method: "GET",
    });
};
let deleteFood = (id) =>{
    return axios({
        url : `${BASE_URL}/${id}`,
        method: "DELETE"
   });
};

let addFood = (food) => {
    return axios ({
        url: BASE_URL,
        method: "POST",
        data: food,
    });
};
//getDetail
let getDetail = (id) => {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "GET",
    });
};
function updateFood(id, food) {
    return axios({
        url: `${BASE_URL}/${id}`,
        method: "PUT",
        data: food,
    });
};

let foodServ = {
    getList,
    deleteFood,
    addFood,
    getDetail,
    updateFood,
};

export default foodServ;
