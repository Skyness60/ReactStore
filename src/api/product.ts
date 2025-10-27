import type { Product } from "../types/Product"

export async function getProducts() : Promise<Product[]>
{
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res)
        throw new Error("Erreur de serveur")
    return res.json()
}