export type Category = {
    id: string,
    name: string,
    slug: string
}

export type NavItem = {
    label: string,
    url: string;
    children?: NavItem[];
}

export type Navigation = {
    title: string;
    items: NavItem[];
}