const Switch = ({ switchThemes, darkMode }) => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input onChange={switchThemes} checked={darkMode} type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-400  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </>
  );
};
export default Switch;
