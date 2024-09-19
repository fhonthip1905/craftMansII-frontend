import HeroContainer from "../components/HeroContainer";
import ProductContainer from "../components/ProductContainer";

export default function HomePage() {
  return (
    <div className="container content">
      <HeroContainer/>
      <ProductContainer/>
    </div>
  );
}
