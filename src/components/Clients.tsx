import { ClientsCard } from "./ClientsCard";

export const Clients = () => {
  return (
    <>
      <div className="w-full h-[1225px] md:h-[591px] flex flex-col items-center justify-around bg-graySecondary">
        <div className="h-5">&nbsp;</div>
        <div className="flex flex-col items-center w-full md:w-[864px] h-[190px] md:h-[100px]">
          <h1 className="text-balance text-3xl font-bold text-center md:text-start">
            What Clients Say
          </h1>
          <p className="text-grayPrimary text-center">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-grayPrimary text-center">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="w-full md:w-[1048px] h-[792px] md:h-[244px] flex flex-col items-center md:grid  md:grid-cols-3 gap-4">
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
        </div>
        <div className="h-5">&nbsp;</div>
      </div>
    </>
  );
};
