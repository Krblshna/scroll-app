import { type Post } from "@/shared/types";

type Props = {
    post: Post;
};

export function PostCard({ post }: Props) {
    return (
        <div className="post-card">
            <div>{`id: ${post.id}`}</div>
            <div>{`title: ${post.title}`}</div>
            <div>{`body: ${post.body}`}</div>
        </div>
    );
}
