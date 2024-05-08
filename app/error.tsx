"use client"; // Error components must be Client Components
import CardList from "@/components/card-list";
import { DEFAULT_PER_PAGE } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";

import { Button } from "@/components/ui/button";
import Center from "@/components/layouts/center";
import MessageBox from "@/components/message-box";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <MessageBox title={error.message} countdown={3}>
            <Button onClick={reset}>Try Again</Button>
        </MessageBox>
    );
}
