import type { JSX } from "react";
import "./ProductCard.css"

export function Spinner() : JSX.Element
{
    return (
        <div className="loading-container">
            <div className="spinner" role="status" aria-label="Chargement en cours"></div>
        </div>
    );
}