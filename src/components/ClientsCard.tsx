export const ClientsCard = () => {
  return (
    <>
      <div className="flex items-center justify-center  w-[329px] h-full bg-white rounded-lg">
        <div className="w-[257px] h-[184px] flex flex-col justify-around ">
          <div className="flex">
            <img className="w-5" src="./src/assets/star.png" alt="start" />
            <img className="w-5" src="./src/assets/star.png" alt="start" />
            <img className="w-5" src="./src/assets/star.png" alt="start" />
            <img className="w-5" src="./src/assets/star.png" alt="start" />
            <img className="w-5" src="./src/assets/star.png" alt="start" />
          </div>
          <p className="flex flex-col text-grayPrimary">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="flex">
            <img
              className="rounded-full w-[50px]"
              src="./src/assets/person.png"
              alt="start"
            />
            <div className="ml-3">
              <p className="text-coffee">Regina miles</p>
              <p className="font-bold">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
