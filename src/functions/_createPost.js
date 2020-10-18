const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");
const { toast } = require('react-toastify');

const CreatePostFunction = async (data) => {
  toast.info("Please wait while we're publishing your post..");
  return await Axios.post(BackendRoutes.post.create, data)
  .then(
    res => {
      toast.success("Post published successfully!")
      console.log(JSON.stringify(res))
      return true;
    }
  ).catch(
    error => {
      toast.error("Sorry, it appears that we cannot publish your post.")
      console.log(JSON.stringify(error))
      return false;
    }
  )
}
export default CreatePostFunction;