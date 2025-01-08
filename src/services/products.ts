import { createClient } from "@supabase/supabase-js";

interface Database {
    public: {
        Tables: {
            products: {
                Row: Product;
                Insert: Omit<Product, "id">;
                Update: Partial<Product>;
            };
        };
    };
}

export interface Characteristic {
    name: string;
    values: string[];
}

export interface Product {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    characteristics: Characteristic[];
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const fetchProducts = async (): Promise<Product[]> => {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
        console.error("Error fetching products:", error);
        throw new Error(error.message);
    }

    return data || [];
};
