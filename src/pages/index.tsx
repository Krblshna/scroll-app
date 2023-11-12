import { Routes, Route } from "react-router-dom";
import { PostsListPage } from "./postsListPage";
import { PostDetailsPage } from "./postDetailsPage";

export function Routing() {
    return (
        <Routes>
            <Route path="/" element={<PostsListPage />} />
            <Route path="/post/:id" element={<PostDetailsPage />} />
        </Routes>
    );
}
