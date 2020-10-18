const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");

const UpdatePostFunction = async (data) => {
  return await Axios.post(BackendRoutes.post.update, data)
  .then((res) => {
    console.log(JSON.stringify(res))
    return true
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
    return err;
  });
}
export default UpdatePostFunction;