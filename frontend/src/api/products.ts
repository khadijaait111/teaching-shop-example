import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    async function fetchProducts() {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        const response = [{
            id: 1,
            name: "Bavoir Hippopotame",
            price: 79.99,
            description: "Craquez pour le bavoir hippopotame !",
            imageUrl: "/public/bavoir1.jpg"
        }, {
            id: 2,
            name: "Bavoir Renard",
            price: 39.99,
            description: "Le motif renard de ce bavoir est trop mignon !",
            imageUrl: "/public/bavoir2.jpg"
        }, {
            id: 3,
            name: "Bavoir Jungle",
            price: 59.99,
            description: "La savane illustre parfaitement la jungle créative de votre bébé !",
            imageUrl: "/public/bavoir3.jpg"
        }];
        setProducts(response);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products }
}