'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { getInstagramPosts } from '@/app/actions/instagram';

type Post = {
  id: string;
  url: string;
  link: string;
  caption?: string;
};

const PLACEHOLDER_POSTS: Post[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop', link: '#' },
  { id: '2', url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop', link: '#' },
  { id: '3', url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop', link: '#' },
  { id: '4', url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop', link: '#' },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>(PLACEHOLDER_POSTS);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    async function fetchPosts() {
      const result = await getInstagramPosts();
      if (result.error) {
        setError(result.error);
      } else if (result.posts && result.posts.length > 0) {
        const formattedPosts = result.posts.map((p: any) => ({
          id: p.id,
          url: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url,
          link: p.permalink,
          caption: p.caption
        }));
        setPosts(formattedPosts);
      }
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between mb-10"
      >
        <div className="flex items-center gap-3 text-[#A68A64]">
          <Instagram size={24} />
          <h3 className="font-sans font-medium text-xl tracking-widest uppercase text-[#EAE6DF]">インスタグラム</h3>
        </div>
        <a href="#" className="font-sans text-sm tracking-widest text-[#EAE6DF]/60 hover:text-[#A68A64] transition-colors">
          フォローする
        </a>
      </motion.div>


      <div className="relative group/carousel">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-none pl-4 w-[85%] sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-square rounded-xl overflow-hidden group bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/50 hover:z-10"
                >
                  <Image
                    src={post.url}
                    alt={post.caption || `Instagram post ${idx + 1}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0D0C0B]/0 group-hover:bg-[#0D0C0B]/40 transition-colors duration-500 flex items-center justify-center">
                    <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={32} />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0D0C0B]/80 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 backdrop-blur-sm border border-white/10 hover:bg-[#A68A64]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0D0C0B]/80 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 backdrop-blur-sm border border-white/10 hover:bg-[#A68A64]"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
