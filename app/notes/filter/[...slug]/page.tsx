/*queryclient & hydration*/
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

/*client component*/
import NotesClient from "./Notes.client";

/*fetch function*/
import { fetchNotes } from "@/lib/api";

import { tagType } from "@/lib/api";

type NotesProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Notes({ params }: NotesProps) {
  const tag  = (await params).slug[0] as tagType;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes({ tag }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}