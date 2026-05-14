import { client } from '$lib/sanity';

export async function load() {
  const handwrittenCode = await client.fetch(
    `*[_type == "handwrittenCode"] | order(_createdAt desc) {
      title,
      description,
      techStack,
      githubUrl,
      liveUrl,
      "image": image.asset->url
    }`
  );

  const vibeCode = await client.fetch(
    `*[_type == "vibeCode"] | order(_createdAt desc) {
      title,
      description,
      techStack,
      githubUrl,
      liveUrl,
      "image": image.asset->url
    }`
  );

  const armies = await client.fetch(
    `*[_type == "army"] | order(_createdAt desc) {
      name,
      lore,
      status,
      "imageUrl": featuredImage.asset->url
    }`
  );

  const blogPosts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      "date": publishedAt,
      excerpt,
      tag
    }`
  );

  return {
    handwrittenCode,
    vibeCode,
    armies,
    blogPosts,
  };
}
