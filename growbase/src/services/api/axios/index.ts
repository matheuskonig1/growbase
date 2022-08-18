import axios from "axios";
import { environment } from "../../environment";
import { responseInterceptor, errorInterceptor } from "./Interceptors";

const Api = axios.create({
    baseURL: environment.BASE_URL,
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export { Api };