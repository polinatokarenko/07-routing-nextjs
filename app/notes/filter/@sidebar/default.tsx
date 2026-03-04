import css from "./SidebarNotes.module.css";

type SidebarNotesProps = {
    params: { slug?: string[] };
}

export default async function SidebarNotes({ params }: SidebarNotesProps) {
    const tags = params.slug ?? [];

    return (
        <ul className={css.menuList}>
            <li className={css.menuItem}>
                <a href={`/notes/filter/all`} className={css.menuLink}>
                    All notes
                </a>
            </li>
            {tags.map(tag =>
                <li key={tag} className={css.menuItem}>
                    <a href={`/notes/filter/${tag}`} className={css.menuLink}>
                    {tag}
                </a>
            </li>)}
        </ul>
    );
};