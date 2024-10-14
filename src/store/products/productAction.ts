import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "@/http/products";
import { getProduct } from "@/http/singleProduct";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  company: string;
  description: string;
  category: string;
}

interface ProductError {
  message: string;
}

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: ProductError }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await getProducts();
    return response.data;
  } catch {
    return rejectWithValue({ message: "Failed to fetch products" });
  }
});

export const fetchProduct = createAsyncThunk<
  Product,
  string,
  { rejectValue: ProductError }
>("products/fetchProduct", async (id, { rejectWithValue }) => {
  try {
    const response = await getProduct(id);
    return response.data;
  } catch {
    return rejectWithValue({ message: "Failed to fetch product" });
  }
});
