import { post } from "@/app/dashboard/page";

export function PostCard(post: post) {
    return (
        <div className="flex p-4 border border-gray-300 rounded-lg mb-4 mx-auto max-w-7xl px-6 lg:px-8">
            <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.description}</p>
            </div>
        </div>
    );}
