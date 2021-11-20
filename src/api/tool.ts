import "dotenv/config";
export const getURL = (path: string): string =>
  `${process.env.REACT_APP_API_URL}${path}`;
