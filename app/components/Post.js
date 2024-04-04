'use client'

import Link from 'next/link';

export default function Post({ post }) {
    return (
        <div>
            <Link href="/">Back</Link><br />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <strong>Author ID: {post.userId}</strong>
        </div>
    );
}