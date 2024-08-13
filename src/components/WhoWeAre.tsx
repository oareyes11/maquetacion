export const WhoWeAre = () => {
  return (
    <>
      <div className="mt-[100px] w-full h-[700px] flex items-center justify-center flex-col">
      <div className="absolute w-full flex justify-center">
        <div className="container w-[330px]  md:w-[600px] lg:w-[1050px] gap-y-4 flex flex-col justify-center items-cener ">
          <h1 className="font-bold text-4xl text-center">Who We Are</h1>
          <div className="flex flex-col">
            <p className="text-center text-grayPrimary">
              Problems trying to resolve the conflict between{" "}
            </p>
            <p className="text-center text-grayPrimary">
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="w-full flex justify-center items-cener mt-5">
            <img
              className="w-[877px]"
              src="./src/assets/video.svg"
              alt="balace"
            />
          </div>
        </div>
      </div>
        <div className="w-full h-[500px] md:h-[400px] bg-graySecondary">&nbsp;</div>
        <div className="w-full h-[400px] md:h-[400px] bg-blueDarkPrimary">&nbsp;</div>
      </div>
    </>
  );
};
