import { ClientsCard } from "./ClientsCard";

export const Clients = () => {
  return (
    <>
      <div className="w-full h-[1125px] md:h-[991px] lg:h-[591px] flex flex-col items-center justify-around bg-graySecondary">
        <div className="container flex flex-col items-center w-full md:w-[864px]  h-[190px] md:h-[100px]">
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
        <div className="w-full xl:w-[1048px]  h-[792px] md:h-[500px] lg:h-[244px] flex  items-center justify-center flex-wrap gap-3">
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
        </div>

      </div>
    </>
  );
};
