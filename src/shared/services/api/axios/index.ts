import axios from "axios";
import { Environment } from "../../../environments/Environment";
import { ErrorInterceptors, ResponseInterceptor } from "./interceptors";

const api = axios.create({
  baseURL: Environment.API_BASE,
});

api.interceptors.response.use(
  (result) => ResponseInterceptor(result),
  (error) => ErrorInterceptors(error)
);

export { api };
