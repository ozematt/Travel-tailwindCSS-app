const LogOut = () => {
  //
  ////LOGIC
  const handleLogOut = () => {
    localStorage.removeItem("user");
  };

  ////UI
  return (
    <li className="rounded-md px-5 py-3 hover:ring-1 ring-gray-400 dark:hover:ring-white">
      <a href="/" onClick={handleLogOut}>
        Log out
      </a>
    </li>
  );
};

export default LogOut;
