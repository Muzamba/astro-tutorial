import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection("blog");
    return rss({
      title: 'Aluno de Astro | Blog',
      description: 'Minha jornada aprendendo Astro',
      site: context.site,
      // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
      items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.id}`,
      })),
      customData: `<language>pt-br</language>`,
    });
}