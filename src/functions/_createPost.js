const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");

const CreatePostFunction = async (data) => {
  return await Axios.post(BackendRoutes.post.create, data)
  .then(
    res => {
      console.log(JSON.stringify(res))
      return true;
    }
  ).catch(
    error => {
      console.log(JSON.stringify(error))
      return false;
    }
  )
}
export default CreatePostFunction;