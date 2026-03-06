import React from "react";

type SidebarNotesLayoutProps = {
    children: React.ReactNode,
    sidebar?: React.ReactNode,
    modal?: React.ReactNode,
}

export default function SidebarNotesLayout({ children, sidebar, modal }: SidebarNotesLayoutProps) {
    return (
        <section>
            {sidebar && <aside>{sidebar}</aside>}
            <main>{children}</main>
            {modal && modal}
        </section>
    );
}