export const AUTH_BACKEND_URL = "http://localhost:8080/";
export const SERVER_BACKEND_URL = "http://localhost:3001/";

export const AUTHENTICATE_USER = {
  url: "authenticate",
  method: "post",
};

export const GET_CONTENT_LIST = {
  url: "contents",
  method: "get",
};
export const GET_CONTENT_FIELDS = (contentName) => ({
  url: `contents/fields/${contentName}`,
  method: "get",
});

export const ADD_CONTENT_FIELD = {
  url: "contents/addField",
  method: "post",
};

export const ADD_CONTENT = {
  url: "contents/create",
  method: "post",
};

export const UPDATE_CONTENT_NAME = {
  url: "contents/updateName",
  method: "patch",
};

export const DELETE_CONTENT_FIELD = {
  url: "contents/deleteField",
  method: "delete",
};
