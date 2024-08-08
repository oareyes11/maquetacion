import { MeetCard } from "./MeetCard"

export const Meet = () => {
  return (
    <>
      <div className="w-full h-[1627px] md:h-[732px] flex flex-col items-center justify-around bg-white">
        <div className="w-full md:w-[864px] h-[110px] flex-col ">
          <h1 className="text-balance text-3xl font-bold text-center md:text-center">
            Meet Our Attorneys
          </h1>
          <p className="text-grayPrimary text-center">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-grayPrimary text-center">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="w-full md:w-[1046px] h-[1179px] md:h-[373px] flex flex-col items-center md:grid  md:grid-cols-3 gap-4">
         
          <MeetCard img="person1" name="Alex Flextcher" level="LAYER & CEO"/>
          <MeetCard img="person2" name="Rodney Stratton" level="CEO"/>
          <MeetCard img="person3" name="Avie Beaton" level="LAYER CIVIL LAW"/>
   
        </div>
      </div>
    </>
  );
};
