import { ProductCard } from "../components/ProductCard";
import "./ProductPage.css"

export default function ProductPage()
{
    return (
        <main className="products-page">
            <h2 className="page-title">
                Nos produits :
            </h2>
            <ProductCard />
        </main>
    );
}