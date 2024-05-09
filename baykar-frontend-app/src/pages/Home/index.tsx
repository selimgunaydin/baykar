import HomeHero from "../../widgets/home-hero";
import HomeProducts from "../../widgets/home-products";
import HomeNewsletter from "../../widgets/home-newsletter";
import HomeComments from "../../widgets/home-comments";
import HomeRecommendation from "../../widgets/home-recommendation";
import HomeWorldMap from "../../widgets/home-world-map";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeHero />
      <HomeProducts />
      <HomeNewsletter />
      <HomeComments />
      <HomeRecommendation />
      <HomeWorldMap />
    </div>
  );
}
