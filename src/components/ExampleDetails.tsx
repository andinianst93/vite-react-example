import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "@/store/products/productAction";
import { AppDispatch, RootState } from "@/store/store";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";

export default function ExampleDetails() {
  const { id } = useParams<{ id: string }>();

  const dispatch: AppDispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id)); // Fetch the single product by its ID
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="text-center h-96 py-28">Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // Ensure product is available before accessing properties
  if (!product) {
    return <div>No product found</div>;
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mt-16">
        <Button asChild variant={"secondary"}>
          <Link to={"/example"}>Back to all products</Link>
        </Button>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="capitalize text-xl font-bold">{product.name}</h2>
            <h3>{formattedPrice}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
