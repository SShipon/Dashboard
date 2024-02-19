import ContentTop from "../ContentTop/ContentTop";
import Home from "../Home/Home";

export default function Overview() {
  return (
    <div className="main-content">
      <ContentTop />
      <div className="relative">
        <hr
          className="w-5/6 absolute right-0"
          style={{ border: "#E6EFF5 solid 1px" }}
        />
      </div>
      <Home />
      <div className="my-8">
        {/* <Rechart /> */}
      </div>
    </div>
  );
}
