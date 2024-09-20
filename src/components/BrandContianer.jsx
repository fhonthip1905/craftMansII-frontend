import BrandCard from "./BrandCard";


export default function BrandContianer() {
  return (
    <div className="container text-center container-brandcontainer">
      <div className="row">
        <div className="col col-title">
          <div className="col-title-y">
            แนะนำ
            <span className="col-title-w">ยี่ห้อคราฟต์เบียร์ที่ควรลอง</span>
          </div>
        </div>
        <div className="col-title-detail">
          <p className="heading-detail">
            หากใครยังไม่เคยชิมสักทีและไม่รู้ว่าจะต้องเริ่มจากตรงไหน craftMan
            มาดูยี่ห้อทีเด็ดที่ใครๆ ก็ไม่ควรพลาด
          </p>
        </div>
      </div>
        <BrandCard/>
    </div>
  );
}
