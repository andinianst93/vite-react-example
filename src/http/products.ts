import axios from "axios";

const BASE_URL = "https://www.course-api.com/react-store-products";

const api = axios.create({
  baseURL: BASE_URL,
});

const handleError = (error: Error, context: string) => {
  console.error(`${context} error:`, error);
  throw error;
};

export function getProducts() {
  try {
    const res = api.get("");
    return res;
  } catch (error) {
    return handleError(error as Error, "getProducts");
  }
}
