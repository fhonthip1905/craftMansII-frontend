import ProductCard from "./ProductCard";

export default function ProductContainer() {
  return (
    <div className="container text-center container-productcontainer">
      <div className="row">
        <div className="col col-title">
          <div className="col-title-y">
            8
            <span className="col-title-w">ประเภทคราฟต์เบียร์ที่ติดท็อปฮิต</span>
          </div>
        </div>
        <div className="col-title-detail">สีทอง : ขม : หอมผลไม้ </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
       
      </div>
    </div>
  );
}
