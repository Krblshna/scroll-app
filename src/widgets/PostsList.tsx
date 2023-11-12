import { useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "@/shared/api";
import { Posts } from "@/shared/types";
import { LinkButton } from "@/shared/ui";
import { PostRow } from "@/entities/post";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const POSTS_LIMIT = 30;
const MAX_POSTS = 100;

export function PostsList() {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<Posts>([]);
    const [loading, setLoading] = useState(true);
    const { data, error, isLoading } = useGetPostsQuery([POSTS_LIMIT, page]);
    const ref = useRef<HTMLElement>();

    useEffect(() => {
        if (!isLoading && !error) {
            setPosts([...posts, ...(data || [])]);
            setLoading(false);
        }
    }, [isLoading, error, data]);

    useEffect(() => {
        function scrollHandler(e: Event) {
            const target = e.target as HTMLElement;
            if (loading || posts.length >= MAX_POSTS) return;
            const scrollHeight = target.scrollHeight;
            const scrollTop = target.scrollTop;
            const innerHeight = window.innerHeight;
            if ((scrollTop + innerHeight) / scrollHeight > 0.7) {
                setPage((page) => page + 1);
                setLoading(true);
            }
        }

        ref.current?.addEventListener("scroll", scrollHandler);
        return () => ref.current?.removeEventListener("scroll", scrollHandler);
    }, [loading]);

    if (error) return <div>Something went wrong</div>;
    if (isLoading) return <div>Loading...</div>;

    const Row = ({
        index,
        style,
    }: {
        index: number;
        style: React.CSSProperties;
    }) => {
        const post = posts[index];
        if (!post) return null;
        return (
            <div style={style}>
                <div className="post">
                    <PostRow post={post} />
                    <LinkButton href={`post/${post.id}`} text="просмотр" />
                </div>
            </div>
        );
    };

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    outerRef={ref}
                    height={height}
                    itemCount={posts.length}
                    itemSize={78}
                    width={width}
                >
                    {Row}
                </List>
            )}
        </AutoSizer>
    );
}
