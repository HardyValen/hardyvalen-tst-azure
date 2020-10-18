const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");
const { toast } = require('react-toastify');

const GetPostByIDFunction = async (id) => {
  return await Axios.get(BackendRoutes.post.getByID + id)
  .then((res) => {
    console.log(JSON.stringify(res.data, null, 2));
    return res.data
  })
  .catch((err) => {
    console.log(JSON.stringify(err, null, 2));
    return err;
  });
}
export default GetPostByIDFunction;