import "@/styles/style.scss";

import { getNavigation } from "@/lib/queries";
import Navigation from "@/components/Navigation/Navigation";

export default async function RootLayout({ children }: any) {
    const menuItems = await getNavigation('main-navigation');

    return (
        <html>
        <body>
        <header className="p-6 border-b">
            <div className="container">
                <Navigation items={menuItems} />
            </div>
        </header>

        {children}
        </body>
        </html>
    );
}