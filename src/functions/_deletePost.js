const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");
const { toast } = require('react-toastify');


const DeletePostFunction = async (id, data = {post_title: "", post_author: ""}) => {
  if (window.confirm(`Are you sure want to delete "${data.post_title}" by ${data.post_author}?`)) {
    toast.info("Please wait while we're communicating to the server..");
    return await Axios.post(BackendRoutes.post.delete, {id})
    .then(
      (data) => {
        toast.success("Post deleted successfully!")
        console.log(JSON.stringify(data));
        return true;
      }
    )
    .catch(
      (err) => {
        toast.error("Sorry, it appears that we cannot delete that post.")
        console.log(JSON.stringify(err));
        return false;
      }
    );
  } else {
    toast.info("Your post delete request was cancelled.");
  }
}

export default DeletePostFunction;