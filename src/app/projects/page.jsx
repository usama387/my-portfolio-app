import { getPosts } from '@/lib/data';
import React from 'react'
import Link from "next/link";

const ProjectsPage = async () => {
    const posts = await getPosts();
    console.log(posts)
  return (
    <div>
        {posts.map((post)=>(
            <Link href={`/projects/${post._id}`} key={post._id}>{post.title}</Link>
        ))}
    </div>
  )
}

export default ProjectsPage;