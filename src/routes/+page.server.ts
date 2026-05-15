import { client } from '$lib/sanity';

export async function load() {
  const [handwrittenCode, vibeCode, armies, blogPosts] = await Promise.all([
    client.fetch(
      `*[_type == "handwrittenCode"] | order(_createdAt desc) {
        title,
        description,
        techStack,
        githubUrl,
        liveUrl,
        "image": image.asset->url
      }`
    ),
    client.fetch(
      `*[_type == "vibeCode"] | order(_createdAt desc) {
        title,
        description,
        techStack,
        githubUrl,
        liveUrl,
        "image": image.asset->url
      }`
    ),
    client.fetch(
      `*[_type == "army"] | order(_createdAt desc) {
        name,
        lore,
        status,
        "imageUrl": featuredImage.asset->url,
        "postSlug": linkedPost->slug.current
      }`
    ),
    client.fetch(
      `*[_type == "post" && isHobbyPost != true] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        tag
      }`
    ),
  ]);

  return {
    handwrittenCode,
    vibeCode,
    armies,
    blogPosts,
  };
}
