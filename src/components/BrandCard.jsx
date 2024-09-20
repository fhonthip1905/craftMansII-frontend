import brand1 from "../assets/brands/triple-pearl.jpeg";
import brand2 from "../assets/brands/sandport.jpeg";
import brand3 from "../assets/brands/sierra-nevada.jpeg";
import brand4 from "../assets/brands/mahanakorn.jpeg";

export default function BrandCard() {
  return (
    <div className="row">
      <div className="col-md-3">
            <div className="img-brand">
                <img className="img-list" src={brand1} alt="" />
            </div>
        </div>
        <div className="col-md-3">
            <div className="img-brand">
                <img className="img-list" src={brand2} alt="" />
            </div>
        </div>
        <div className="col-md-3">
            <div className="img-brand">
                <img className="img-list" src={brand3} alt="" />
            </div>
        </div>
        <div className="col-md-3">
            <div className="img-brand">
                <img className="img-list" src={brand4} alt="" />
            </div>
        </div>
    </div>
  )
}
