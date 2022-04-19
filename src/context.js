import React, { useState, useContext } from "react";

//create a context
export const AppContext = React.createContext();

/*create a provider component, ALWAYS add children prop, so that we can wrap this povider around the components that require this context
 */

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <AppContext.Provider
      value={{ isModalOpen, toggleModal, isSideBarOpen, toggleSideBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* we can either export both the context and the provider component and import them where needed or we can create a custom hook that exposes both
 */

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider, useGlobalContext };
