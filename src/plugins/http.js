import axios from "axios";

const MyHttpServer = {};
MyHttpServer.install = function(Vue) {
  axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";
  const token = localStorage.getItem('token')
  axios.defaults.headers.common['Authorization']= token
  Vue.prototype.$http = function(data) {
    return new Promise((resolve, reject) => {
      axios({
        data: {},
        ...data
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };
};
export default MyHttpServer;
