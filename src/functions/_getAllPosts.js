const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");
const { toast } = require('react-toastify');

const GetAllPostFunction = async () => {
  // toast.info("Please wait while we're getting posts from the server..");
  return await Axios.get( BackendRoutes.post.getAll )
    .then(res => {
      // toast.success("All posts were fetched successfully!")
      return res.data;
    })
    .catch((e) => {
      toast.error("Sorry, it appears we cannot fetch posts from the server.")
      console.log(JSON.stringify(e));
      return [];
    })
}

export default GetAllPostFunction;