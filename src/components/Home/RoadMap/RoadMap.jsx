import React from "react";

function RoadMap() {
  return (
    <section className="mt-60 relative">
      <div className="absolute bg-black/10 w-[60%] py-20 rounded-br-[7em] rounded-tr-[3em]"></div>
      <dl className="ml-40 flex justify-between">
        <div className="w-[60%]">
          <h1 className="text-5xl">Roadmap</h1>
          <p className="w-[65%] text-sm mt-7 text-white/25">
            Decentralized cryptocurrency is produced by the entire
            cryptocurrency system collectively, at a rate the system is created
            and which is publicly known.
          </p>
        </div>
        <div className="w-full">
          <div>
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-accent"></li>
              <li className="step step-accent"></li>
              <li className="step step-error"></li>
              <li className="step step-error"></li>
              <li className="step step-info"></li>
              <li className="step step-info"></li>
              <li className="step step-success"></li>
            </ul>
          </div>

          <div className="flex gap-">
            <div>
              <h1>MAR 2018</h1>
              <p>Decentralized cryptocurrency is</p>
            </div>
            <div>
              <h1>MAR 2018</h1>
              <p>Decentralized cryptocurrency is</p>
            </div>
            <div>
              <h1>MAR 2018</h1>
              <p>Decentralized cryptocurrency is</p>
            </div>
            <div>
              <h1>MAR 2018</h1>
              <p>Decentralized cryptocurrency is</p>
            </div>
          </div>
        </div>
      </dl>
    </section>
  );
}

export default RoadMap;
