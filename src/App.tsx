import "./App.css";

function App() {
  return (
    <div className="h-screen bg-gray-400">
      <Nav />
    </div>
  );
}

export default App;

export const Nav = () => {
  const navList = [
    { id: 0, name: "About" },
    { id: 1, name: "Service" },
    { id: 2, name: "Project" },
    { id: 3, name: "Blog" },
    { id: 4, name: "Contact" },
  ];

  const iconList = [
    { id: 0, alt: "Youtube", icon: "" },
    { id: 1, alt: "Instragram", icon: "" },
    { id: 2, alt: "Facebook", icon: "" },
  ];

  return (
    <div>
      <nav className="flex justify-between h-24 items-center px-16">
        <div className="space-x-6">
          {iconList.map(({ id, alt, icon }) => {
            return (
              <span key={id}>
                {alt}
                {icon}
              </span>
            );
          })}
        </div>

        <h1 className="text-center text-3xl font-bold">RUWAH.</h1>

        <div className="space-x-6 text-sm">
          {navList.map(({ id, name }) => {
            return <span key={id}>{name}</span>;
          })}
        </div>
      </nav>
      <div className="border-b-[2px] border-b-gray-300 mx-2" />
    </div>
  );
};
