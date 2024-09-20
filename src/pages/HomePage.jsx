import BrandContianer from "../components/BrandContianer";
import HeroContainer from "../components/HeroContainer";
import NewsContianer from "../components/NewsContianer";
import ProductContainer from "../components/ProductContainer";

export default function HomePage() {
  return (
    <div className="container content">
      <HeroContainer/>
      <ProductContainer/>
      <BrandContianer/>
      <NewsContianer/>
    </div>
  );
}
