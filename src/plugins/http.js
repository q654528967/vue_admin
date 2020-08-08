import axios from "axios";

const MyHttpServer = {};
MyHttpServer.install = function(Vue) {
  Vue.prototype.$http = axios;
};
export default MyHttpServer;
