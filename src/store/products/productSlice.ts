import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProduct } from "./productAction";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  company: string;
  description: string;
  category: string;
}

interface SingleProduct {
  id: string;
  name: string;
  price: number;
  images: Imgs[];
  company: string;
  description: string;
  category: string;
  reviews: number;
  stars: number;
  stock: number;
}

type Imgs = {
  url: string;
  height: number;
  width: number;
  filename: string;
};

interface ProductError {
  message: string;
}

interface ProductState {
  products: Product[];
  product: SingleProduct | null;
  loading: boolean;
  error: ProductError | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch multiple products
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ProductError;
    });

    // Fetch a single product
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload; // Store the fetched product in `product`
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ProductError;
    });
  },
});

export default productSlice.reducer;
export type { Product, ProductError };
