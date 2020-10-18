const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");

const GetAllPostFunction = async () => {
  return await Axios.get( BackendRoutes.post.getAll )
    .then(res => {
      return res.data;
    })
    .catch((e) => {
      console.log(JSON.stringify(e, null, 4));
      return false;
    })
}

module.exports = GetAllPostFunction;