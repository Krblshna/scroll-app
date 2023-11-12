import { Routes, Route } from "react-router-dom";
import { PostsListPage } from "./postsListPage";
import { PostDetailsPage } from "./postDetailsPage";

export function Routing() {
    return (
        <Routes>
            <Route path="/scroll-app/" element={<PostsListPage />} />
            <Route path="/scroll-app/post/:id" element={<PostDetailsPage />} />
        </Routes>
    );
}
