import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/products/productAction";
import { AppDispatch, RootState } from "@/store/store";
import ExampleItem from "./ExampleItem";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export default function Example() {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        await dispatch(fetchProducts());
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsData();
  }, [dispatch]);

  if (loading) {
    return <div className="text-center h-96 py-28">Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  // Sort the products based on the selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "company") {
      return a.company.localeCompare(b.company);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0; // Default, no sorting applied
  });

  // Calculate pagination data
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-8 mt-8 mb-16">
      <h1 className="text-xl font-bold mb-4">All Products</h1>
      <div className="flex items-center gap-4 mb-8">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search product..."
        />
        <Select onValueChange={(value) => setSortBy(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="company">Company</SelectItem>
            <SelectItem value="category">Category</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {paginatedProducts.length === 0 && (
        <div className="text-center h-96 py-28">No products found</div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {paginatedProducts.map((product) => (
          <ExampleItem key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </section>
  );
}
