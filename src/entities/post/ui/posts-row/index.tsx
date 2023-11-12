import { type Post } from "@/shared/types";

type Props = {
    post: Post;
};

export function PostRow({ post }: Props) {
    return (
        <span className="details">{`${post.id} | ${post.title} | ${post.body}`}</span>
    );
}
