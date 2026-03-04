/*queryclient & hydration*/
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

/*fetch function*/
import { fetchNoteById } from "@/lib/api";

/*client component*/
import NoteDetailsClient from "./NoteDetails.client";

type NoteDetailsProps = {
    params: {
        id: string;
    }
}

export default async function NoteDetails({ params }: NoteDetailsProps) {
    const { id } = await params;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["note", id],
        queryFn: () => fetchNoteById(id),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
              <NoteDetailsClient />
        </HydrationBoundary>
    );
}