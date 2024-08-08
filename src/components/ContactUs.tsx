import { Button } from "./Button";

export const ContactUs = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[821px] bg-bg-family bg-cover">
        <div className="container flex flex-col justify-center w-[330px] md:w-[1050px] h-[672px]">
          <h5 className="font-bold">Contact Us</h5>
          <h2 className="font-bold text-[40px]">Make an Appointment</h2>
          <div className="w-full md:w-[602px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <input
                className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
                type="text"
                placeholder="Full name"
              />
            </div>

            <div className="w-full">
              <input
                className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="w-full">
              <select className="w-full bg-gray-200 border border-gray-300 p-2 rounded">
                <option value="opcion1">Pleace select</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>

            <div className="w-full">
              <select className="w-full bg-gray-200 border border-gray-300 p-2 rounded">
                <option value="opcion1">4:00 Available</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>

            <div className="col-span-1 md:col-span-2">
              <textarea
                className="w-full h-[140px] bg-gray-200 border border-gray-300 p-2 rounded"
                placeholder="Message"
              ></textarea>
            </div>

            <Button title="Book Appointment" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col pl-5 md:pl-0 md:flex-row md:justify-around md:items-center gap-y-4  h-[142px] bg-white">
        <div className="flex flex-col">
          <h3 className="font-bold">Request A Free Consultation</h3>
          <p className="text-grayPrimary">
            the quick fox jumps over the lazy dog
          </p>
        </div>
       
        <Button title="Contact Us" />
      </div>
    </>
  );
};
