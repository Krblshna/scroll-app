import { useGetPostQuery } from "@/shared/api";
import { PostCard } from "@/entities/post";

type Props = {
    postId: string | undefined;
};

export function PostDetails({ postId }: Props) {
    if (!postId) return <div>Wrong post id</div>;
    const { data, error, isLoading } = useGetPostQuery(postId);
    if (isLoading) return <div>Loading...</div>;
    if (error || !data) return <div>Something went wrong</div>;
    return <PostCard post={data} />;
}
