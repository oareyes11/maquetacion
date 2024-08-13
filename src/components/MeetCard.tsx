export const MeetCard = ({ img = "", name = "", level = "" }) => {
  return (
    <>
      <div className="flex flex-col border border-graySecondary  w-[329px] h-[332px] bg-white">
        <img className="h-[231px]" src={`./src/assets/${img}.jpeg`} alt="" />
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h5 className="font-bold text-center">{name}</h5>
          <p className="text-grayPrimary text-center">{level}</p>
          <div className="flex items-center justify-center gap-4">
            <img className="" src="./src/assets/facebook.svg" alt="facebook" />
            <img
              className=""
              src="./src/assets/instagram.svg"
              alt="instagram"
            />
            <img className="" src="./src/assets/twitter.svg" alt="twitter" />
          </div>
        </div>
      </div>
    </>
  );
};
