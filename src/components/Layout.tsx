import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </React.Fragment>
    );
}
