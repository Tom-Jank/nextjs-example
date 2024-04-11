import { post } from "@/app/dashboard/page";

export function DisplayPost(post: post) {
    return (
        <div className="w-11/12 flex p-4 border border-gray-300 rounded-lg mb-4 mx-auto px-6 lg:px-8">
            <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.description}</p>
            </div>
        </div>
    );}
