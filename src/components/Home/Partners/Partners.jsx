import Image from "next/image";
import teslaLogo from "../../../assets/Tesla_logo.png";

function Partners() {
  return (
    <section className="mt-40 container mx-auto">
      <h1 className="text-center text-accent text-6xl">Our Partners</h1>

      <dl className="flex justify-around mt-10">
        <div className="flex px-20 py-3 rounded-xl bg-white">
          <Image src={teslaLogo} width="100" height="100" alt="logo" />
        </div>

        <div className="flex px-20 py-3 rounded-xl bg-white">
          <Image src={teslaLogo} width="100" height="100" alt="logo" />
        </div>

        <div className="flex px-20 py-3 rounded-xl bg-white">
          <Image src={teslaLogo} width="100" height="100" alt="logo" />
        </div>

        <div className="flex px-20 py-3 rounded-xl bg-white">
          <Image src={teslaLogo} width="100" height="100" alt="logo" />
        </div>
      </dl>
    </section>
  );
}

export default Partners;
