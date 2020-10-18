const url = "http://localhost:9000/"
// const url = "http://hardyvalen-backend.azurewebsites.net/";

const BackendRoutes = {};

BackendRoutes.home = url;
BackendRoutes.checkDB = url + "check-db-connection/"; 

BackendRoutes.post = {};
BackendRoutes.post.getAll = url + "post/get-all/";
BackendRoutes.post.getByID = url + "post/get?id=";
BackendRoutes.post.create = url + "post/create/";
BackendRoutes.post.update = url + "post/update/";
BackendRoutes.post.delete = url + "post/delete/";

export default BackendRoutes;