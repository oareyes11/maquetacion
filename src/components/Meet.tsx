import { MeetCard } from "./MeetCard"

export const Meet = () => {
  return (
    <>
      <div className="w-full h-[1327px] md:h-[991px] lg:h-[732px] flex flex-col items-center justify-around bg-white">
        <div className="container w-full md:w-[864px] h-[110px] flex-col ">
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
        <div className="container w-full flex  items-center justify-center flex-wrap gap-4">
         
          <MeetCard img="person1" name="Alex Flextcher" level="LAYER & CEO"/>
          <MeetCard img="person2" name="Rodney Stratton" level="CEO"/>
          <MeetCard img="person3" name="Avie Beaton" level="LAYER CIVIL LAW"/>
   
        </div>

      </div>
    </>
  );
};
