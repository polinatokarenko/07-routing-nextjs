import { fetchNotes } from "@/lib/api";
import type { tagType } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function NotesByTag({ params }: Props) {
  const { slug } = await params;

  const first = slug?.[0];
  const tag =
    first === undefined || first === "all"
      ? undefined
      : (first as tagType);

  const res = await fetchNotes({ tag });

  return <NoteList notes={res.notes ?? []} />;
}