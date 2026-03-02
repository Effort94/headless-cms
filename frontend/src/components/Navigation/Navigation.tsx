import Link from "next/link";
import { getRelativePath } from "@/utils/linkHelpers";

export default function Navigation({ items }: any) {
    return (
        <nav>
            <ul>
                {items.map((item: any) => (
                    <li key={item.id}>
                        <Link href={getRelativePath(item.url)}>
                            {item.label}
                        </Link>

                        {item.children?.length > 0 && (
                            <ul>
                                {item.children.map((child: any) => (
                                    <li key={child.id}>
                                        <Link href={getRelativePath(child.url)}>
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}