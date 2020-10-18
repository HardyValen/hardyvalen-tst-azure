const { default: Axios } = require("axios");
const { default: BackendRoutes } = require("../routes/BackendRoutes");

const DeletePostFunction = async (id) => {
  return await Axios.post(BackendRoutes.post.delete, {id})
  .then(
    (data) => {
      console.log(JSON.stringify(data));
      return true;
    }
  )
  .catch(
    (err) => {
      console.log(JSON.stringify(err));
      return err;
    }
  );
}

export default DeletePostFunction;