import { LinkButton } from "@/shared/ui";
import { PostDetails } from "@/widgets/PostDetails";
import { useParams } from "react-router-dom";

export function PostDetailsPage() {
    const { id } = useParams();
    return (
        <>
            <PostDetails postId={id} />
            <LinkButton href={"/scroll-app"} text="назад" />
        </>
    );
}
