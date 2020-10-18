const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");
const { toast } = require('react-toastify');

const UpdatePostFunction = async (data) => {
  toast.info("Please wait while we're updating this post..");
  return await Axios.post(BackendRoutes.post.update, data)
  .then((res) => {
    toast.success("That post was updated successfully!")
    console.log(JSON.stringify(res))
    return true
  })
  .catch((err) => {
    toast.error("Sorry, it appears that we cannot update that post.")
    console.log(JSON.stringify(err));
    return err;
  });
}
export default UpdatePostFunction;