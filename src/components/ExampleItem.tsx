import { Product } from "@/store/products/productSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function ExampleItem({ product }: { product: Product }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <Card>
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-[400px] h-[200px] object-cover rounded mb-4"
        />
        <CardTitle className="capitalize">{product.name}</CardTitle>
        <CardDescription className="capitalize">
          {product.category} | {product.company}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle>{formattedPrice}</CardTitle>
      </CardContent>
      <CardFooter>
        <Button asChild variant={"outline"}>
          <Link to={`/example/${product.id}`}>View Product</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
