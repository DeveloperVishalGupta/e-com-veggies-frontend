
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/featuredProducts";
import Filter from "@/components/filter";
import Hero from "@/components/hero";
import HowItWork from "@/components/howItWork";
import Layout from "@/components/layout";
import Newsletter from "@/components/newsletter";
import Seasonal from "@/components/seasonal";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return <>
    <div>
      <Hero />
    </div>
    <div>
      <Categories />
    </div>
    <div>
      <FeaturedProducts />
    </div>
    <div>
      <Filter />
    </div>
    <div>
      <Seasonal />
    </div>
    <div>
      <HowItWork />
    </div>
    <div>
      <Testimonials />
    </div>
    <div>
      <Newsletter />
    </div>
  </>
}
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
