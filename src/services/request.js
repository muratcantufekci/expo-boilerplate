import axios from "axios";

class Request {
  constructor(apiUrl) {
    this.instance = axios.create({
      baseURL: apiUrl,
    });
  }

  get = async (dest, config = {}) => {
    if (config.withAuth) {
    //   const token = useUserStore.getState().token;
    //   if (token) {
    //     config.headers = {
    //       ...config.headers,
    //       Authorization: `Bearer ${token}`,
    //     };
    //   }
    }

    const { data } = await this.instance.get(dest, config);
    return data;
  };

  post = async (dest, body = {}, config = {}) => {
    if (config.withAuth) {
    //   const token = useUserStore.getState().token;
    //   if (token) {
    //     config.headers = {
    //       ...config.headers,
    //       Authorization: `Bearer ${token}`,
    //     };
    //   }
    }

    const { data } = await this.instance.post(dest, body, config);
    return data;
  };
}

const apiUrl = "";

const request = new Request(apiUrl);

export default request;