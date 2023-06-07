import dawn from "../assets/images/drawings/dawn.jpg";
import gloria from "../assets/images/drawings/gloria.jpg";
import go_a from "../assets/images/drawings/gota.jpg";
import pabllo from "../assets/images/drawings/pabllo.jpg";
import water from "../assets/images/drawings/water.jpg";
import rina from "../assets/images/drawings/rina.jpg";
import waterface from "../assets/images/drawings/waterface.jpg";

function Art() {
  return (
    <section id="art">
      <p className="mb-6 text-3xl font-bold mx-4">Art</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        <img src={dawn} className="my-2" />
        <img src={gloria} className="my-2" />
        <img src={go_a} className="my-2" />
        <img src={pabllo} className="my-2" />
        <img src={water} className="my-2" />
        <img src={rina} className="img-responsive my-2" />
        <img src={waterface} className="my-2" />
      </div>
    </section>
  );
}

export default Art;
