import { useState, useEffect } from "react";
import { getProductById } from "../api/product";
import type { Product } from "../types/Product";

export function useOneProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) {
        setProduct(null);
        setLoading(false);
        return;
      }
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  return { product, loading };
}
