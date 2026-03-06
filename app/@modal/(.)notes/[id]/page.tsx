"use client"

import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "@/components/NotePreview/NotePreview.client";
import { useRouter } from "next/router";

export default function NotePreviewModal() {
    const router = useRouter();

    return (
        <>
            <Modal onClose={() => router.back()}>
                <NotePreviewClient />
            </Modal>
        </>
    )
}