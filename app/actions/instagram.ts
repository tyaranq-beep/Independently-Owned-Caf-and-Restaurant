'use server';

export async function getInstagramPosts() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  
  if (!token) {
    return { error: "Instagram access token is not configured.", posts: [] };
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    
    if (!res.ok) {
      throw new Error('Failed to fetch Instagram feed');
    }
    
    const data = await res.json();
    return { error: null, posts: data.data.slice(0, 8) };
  } catch (e) {
    console.error(e);
    return { error: "Failed to load Instagram feed.", posts: [] };
  }
}
