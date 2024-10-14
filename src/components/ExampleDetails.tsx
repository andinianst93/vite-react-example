import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "@/store/products/productAction";
import { AppDispatch, RootState } from "@/store/store";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import ImgCarousel from "./Carousel";

export default function ExampleDetails() {
  const { id } = useParams<{ id: string }>();

  const dispatch: AppDispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="text-center h-96 py-28">Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  console.log(product);

  return (
    <>
      <section className="max-w-7xl mx-auto px-12 mt-6">
        <Button asChild variant={"secondary"}>
          <Link to={"/example"}>Back to all products</Link>
        </Button>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-16 pt-8">
        <div>
          <div className="grid grid-cols-5 gap-4 items-start">
            <div className="col-span-2">
              <h2 className="capitalize text-xl font-bold mx-6 mb-6">
                {product.name}
              </h2>
              <ImgCarousel imgs={product.images} />
            </div>
            <div className="col-span-3 mt-14">
              <p className="text-gray-700 leading-7">{product.description}</p>
              <h3 className="text-lg font-bold my-6">{formattedPrice}</h3>
              <h4>Available stock: {product.stock}</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
