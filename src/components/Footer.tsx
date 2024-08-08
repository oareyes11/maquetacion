export const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center h-[1381px] md:h-[526px] bg-blueDarkPrimary">
        <div className="flex w-full md:w-[1050px] h-[138px] grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <h3 className="flex items-center justify-center  text-graySecondary">
            Litigada
          </h3>
          <div className="flex items-center justify-center gap-4 ">
            <img src="./src/assets/social.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className="flex pl-5 md:pl-0 w-full md:w-[1050px] h-[1381px] md:h-[310px] grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex flex-col gap-5">
            <p className="text-graySecondary">Company info</p>
            <p className="text-graySecondary">About us</p>
            <p className="text-graySecondary">Carrier</p>
            <p className="text-graySecondary">we are hiring</p>
            <p className="text-graySecondary">Blog</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-graySecondary">Legal</p>
            <p className="text-graySecondary">About us</p>
            <p className="text-graySecondary">Carrier</p>
            <p className="text-graySecondary">we are hiring</p>
            <p className="text-graySecondary">Blog</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-graySecondary">Features</p>
            <p className="text-graySecondary">About us</p>
            <p className="text-graySecondary">Carrier</p>
            <p className="text-graySecondary">we are hiring</p>
            <p className="text-graySecondary">Blog</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-graySecondary">Resource</p>
            <p className="text-graySecondary">About us</p>
            <p className="text-graySecondary">Carrier</p>
            <p className="text-graySecondary">we are hiring</p>
            <p className="text-graySecondary">Blog</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-graySecondary">Get in touch</p>
            <div className="w-full">
                <div className="w-full">
                <input className="w-[104px] h-[58px]" type="text" />
                <button className="w-[80px] text-white bg-coffee h-[58px] rounded-r-lg">
                    Subscribe
                </button>
                </div>
                <small className="text-white">Lorem impsum dolor amit</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
