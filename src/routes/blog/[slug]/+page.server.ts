import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      tag,
      body
    }`,
    { slug: params.slug }
  );

  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post,
  };
}
