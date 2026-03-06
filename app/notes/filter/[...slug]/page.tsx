/*queryclient & hydration*/
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

/*client component*/
import NotesClient from "./Notes.client";

/*fetch function*/
import { fetchNotes } from "@/lib/api";

type NotesProps = {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function Notes({ searchParams }: NotesProps) {
  const perPage = 6;

  const queryClient = new QueryClient();

  const props = await searchParams;

  const search = props?.search ?? "";
  const page = Number(props?.page ?? 1);

  await queryClient.prefetchQuery({
    queryKey: ["notes", search, page],
    queryFn: () => fetchNotes({ search, page, perPage }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotesClient/>
    </HydrationBoundary>
  );
}