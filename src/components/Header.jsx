import Switch from "./Switch"

const Header = ({ switchThemes, darkMode }) => {
  return (
    <header className="flex flex-row items-center content-center gap-6 my-5">
      <h1 className="text-4xl font-bold dark:text-slate-50">Todo List</h1>
      <Switch switchThemes={switchThemes} darkMode={darkMode}/>
    </header>
  )
}
export default Header