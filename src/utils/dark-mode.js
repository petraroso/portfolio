const darkMode = () => {
  const themeToggleButtons = document.querySelectorAll("#theme-toggle");

  //state
  const theme = localStorage.getItem("theme");

  //on mount (to remember mode between reloads)
  theme && document.body.classList.add(theme); //if theme is truthy then this will execute. theme=="light-mode"

  //handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode"); //toggle adds a class if it doesnt exist, ad it removes a class if it exists
    //to remember mode between reloads
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class"); //so there is no empty class attribute
    }
  };

  //events
  themeToggleButtons.forEach((button) => {
    button.addEventListener("click", handleThemeToggle);
  });
};
export default darkMode;
