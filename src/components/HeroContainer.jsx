import Button from './Button';

export default function HeroContainer() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-around">
        <div className="col-lg-6 col-md-12 text-lg-start text-center">
          <div className="hero-text-header mb-4">
            Find your beer Find a craft beer that speaks to you.
          </div>
          <p className="hero-text-content mb-4">
            ด้วยความหลากหลายทางด้านรสชาติ สีสันความแรงของแอลกอฮอล์ของ
            คราฟเบียร์ในแต่ละประเภท มาสนุกกับการค้นหาคราฟเบียร์ที่ใช่และตรงกับ
            ความชอบสำหรับคุณไปกับ craftMans
          </p>
          <div className="btn-hero d-grid">
            <Button>ค้นหาเบียร์ที่ใช่สำหรับคุณ</Button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 text-center">
          <img src="./src/assets/beer-hero-03.jpg" alt="Hero" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
