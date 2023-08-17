// http status codes
export const StatusCode = {
  Success: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  Conflict: 409,
  InternalServer: 500,
};

export const colors = {
  primary: "#14d0ffb8",
  white: "#FFFFFF",
  textColor: "#414141",
  grayBg: "#f4f4f4",
  grayText: "#b81a1a",
  grayBorder: "#14d0ffb8",
  lightGrayBorder: "#14d0ffb8",
  lightTextColor: "#838383",
  greenText: "#b81a1a",
};

export const defaultFilter = {
  pageIndex: 1,
  pageSize: 10,
  keyword: "",
};

export const RecordsPerPage = [2, 5, 10, 100];
