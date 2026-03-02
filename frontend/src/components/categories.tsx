import { Category } from "@/src/lib/types";

export function Categories({ categories }:{categories: Category[]}) {
    return (
        <div>
            {categories.map((category) => (
                <div key={category.id}>
                    {category.name}
                </div>
            ))}
        </div>
    )
}