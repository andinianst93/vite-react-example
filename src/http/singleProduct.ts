import axios from "axios";

const BASE_URL = "https://www.course-api.com/react-store-single-product";

const api = axios.create({
  baseURL: BASE_URL,
});

const handleError = (error: Error, context: string) => {
  console.error(`${context} error:`, error);
  throw error;
};

export async function getProduct(id: string) {
  try {
    const res = await api.get(`?id=${id}`);

    return res;
  } catch (error) {
    return handleError(error as Error, "getProduct");
  }
}
