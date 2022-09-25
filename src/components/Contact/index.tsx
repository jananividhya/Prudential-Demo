import location from "../../asserts/location.svg";
import phone from "../../asserts/phone.svg";

const Contact = () => {
  return (
    <div className="absolute bottom-20">
      <div className="grid grid-cols-5">
        <div className="col-span-1 m-auto">
          <img src={location} alt="Sooper Location" />
        </div>
        <div className="col-span-3 text-left">
          Dongcheng District Metro Cultural Building
        </div>

        <div className="col-span-1 m-auto">
          <img src={phone} alt="Sooper Phone" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
