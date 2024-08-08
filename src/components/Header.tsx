import { Button } from "./Button";

export const Header = () => {
  return (
    <>
      <div className="w-full h-[1226px] md:h-[823px] flex flex-col items-center  bg-bg-header bg-cover">
        <div className="w-full md:w-[1322px] h-[104px]  "></div>
        <div className="w-full md:w-[1322px] h-full flex justify-center ">
          <div className="w-full w-[1050px] h-full flex flex-col items-center md:grid  md:grid-cols-2 gap-4 ">
            <div className="flex items-center justify-center">
              <div className="p-4 flex justify-center gap-y-4 flex flex-col ">
                <h1 className="text-balance text-3xl font-bold text-center md:text-start">
                  Help to reclaim your life and freedom
                </h1>
                <p className="text-center md:text-start">
                  We know how large objects will act, but things on a small
                  scale.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-[300px]">
                  <button className="bg-coffee text-white py-2 px-4 rounded-full">
                    Get Quote Now
                  </button>
                  <button className=" border border-coffee text-coffee py-2 px-4 rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="flex w-full h-full justify-center items-center md:justify-start">
              <div className="container bg-white rounded w-[330px] h-[619px] gap-y-4 flex items-center justify-around flex-col">
                <h1 className="text-balance text-3xl font-bold text-center">
                  Book Appointment
                </h1>
                <div className="w-[248px] h-[369px] flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-1">
                    <small>
                      <b>Name*</b>
                    </small>
                    <input
                      className="bg-gray-200 border  p-2 rounded"
                      type="text"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <small>
                      <b>Email*</b>
                    </small>
                    <input
                      className="bg-gray-200 border  p-2 rounded"
                      type="email"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <small>
                      <b>Department*</b>
                    </small>
                    <select className="bg-gray-200 border  p-2 rounded">
                      <option value="opcion1">Pleace select</option>
                      <option value="opcion2">Opción 2</option>
                      <option value="opcion3">Opción 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <small>
                      <b>Time*</b>
                    </small>
                    <select className="bg-gray-200 border  p-2 rounded">
                      <option value="opcion1">4:00 Available</option>
                      <option value="opcion2">Opción 2</option>
                      <option value="opcion3">Opción 3</option>
                    </select>
                  </div>
                </div>
                <Button color="bg-blueDarkPrimary" title="Book Appointment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
