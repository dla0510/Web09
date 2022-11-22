import axios from 'axios';
import { SERVER } from '../config';

// SERVER 연결시 SERVER 로 변경 / 테스트시 TESTSERVER 로 변경
const BASE_URL = SERVER;

const axiosApi = (url: string, headers?: Record<string, unknown>) => {
  return axios.create({ baseURL: url, headers });
};

const defaultInstance = axiosApi(BASE_URL);
export default defaultInstance;