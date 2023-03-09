import axios from "axios";

const makeRequest = async (
  baseURL,
  apiEndPoint,
  dynamicConfig = {},
  headers = {}
) => {
  const requestDetails = {
    baseURL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
    headers,
  };
  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
