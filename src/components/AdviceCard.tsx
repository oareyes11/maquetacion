export const AdviceCard = ({title = '', img = '', }) => {
  return (
    <>
      <div className="container w-[328px] h-[385px] rounded-lg bg-pinkPrimary flex items-center flex-col justify-between">
        <div className="container w-full h-[132px] flex  justify-center items-center gap-4">
          <div className="container w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center">
            <img src={`./src/assets/${img}.svg`} alt="balace" />
          </div>
          <h5>{title}</h5>
        </div>
        <div className="container w-full h-[253px] bg-white border border-bluePrimary rounded-lg flex justify-center">
          <div className="w-9/12 h-full flex items-center ">
            <ul>
              <li>- The best products start with Figma</li>
              <li>- Design with real data</li>
              <li>- Lightning fast prototyping</li>
              <li>- Fastest way to organize</li>
              <li>- Work at the speed of thought.</li>
              <li className="text-coffee">Learn More</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
