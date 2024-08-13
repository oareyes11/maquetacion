import { AdviceCard } from "./AdviceCard";

export const Advice = () => {
  return (
    <div className="w-full xs:h-[732px] md:h-[1132px] lg:h-[732px] bg-white flex  justify-center">
      <div className=" w-[1050px]  flex items-center flex-col justify-around">
        <div className="container w-[330px] md:w-[864px] lg:w-full h-[180px] md:h-[110px] my-[100px] md:my-0 text-center ">
          <h2 className="font-bold text-[40px]">Practice Advice</h2>
          <p className="text-grayPrimary">
            Problems trying to resolve the conflict between{" "}
          </p>
          <p className="text-grayPrimary">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="container w-full flex  items-center justify-center flex-wrap gap-4 ">
          <AdviceCard title="hoFrauds or Misleadla" img="balance" />
          <AdviceCard title="Bailes & Warrants" img="hammer" />
          <AdviceCard title="Federal Drug Crimes" img="file" />
        </div>
      </div>
    </div>
  );
};
