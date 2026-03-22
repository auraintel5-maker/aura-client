import { how_tos } from "@/modelDataset";
import { Timeline } from "./Timeline";

const Features = () => {
  const data = how_tos.map((item, index) => ({
    title: item.title,
    tag: item.tag,
    content: (
      <div>
        <p className="mb-8 text-base md:text-lg text-[#0F1E3C]">
          <span className="font-semibold text-[#008B8B]">
            Step {index + 1}: {item.title}
          </span>
          <br />
          {item.text}
          <br />
          {/* <span className="text-[#FCA311] font-semibold">🟣 {item.tag}</span> */}
        </p>

        {/* <div className="grid grid-cols-1 gap-4">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div> */}
      </div>
    ),
  }));

  return (
    <div className="container w-full">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Features;