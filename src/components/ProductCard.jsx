import bottle from "../assets/products/cnx-bottle.png";

export default function ProductCard() {
  return (
    <a href="#" className="btn btn-productcard">
      <div className="card card-product">
        <img className="card-img-top" src={bottle} alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
           card text
          </p>
        </div>
      </div>
    </a>
  );
}
