const Story = ({ img, username }) => {
  return (
    <div className="cursor-pointer hover:scale-110 transition transform duration-200 ease-out">
      <img
        className="h-14 w-14 rounded-full p-[2px] border-red-500 border-2 object-contain "
        src={img}
        alt=""
      />
      <p className="w-14 text-xs truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
