import { Hero } from '@/components/hero'
import { Categories} from "@/components/categories";
import { LatestPosts } from "@/components/latest-posts";
import { getCategories } from "@/lib/queries";

export default async function Home() {
  const categories = await getCategories();

  return (
      <section>
          <Categories categories={categories} />
          <LatestPosts />
      </section>
  );
}
