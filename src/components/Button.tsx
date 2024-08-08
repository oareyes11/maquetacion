export const Button = ({ color = "bg-coffee", title = "" }) => {
  return (
    <>
      <button
        className={`w-[248px] ${color} text-white py-2 px-4 rounded h-[58px]`}
      >
        {title}
      </button>
    </>
  );
};
