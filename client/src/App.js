/*eslint-disable */

import SimpleSidebar from './presentational/simple-sidebar';
import Header from './presentational/header';
import ViewInvoice from './components/viewInvoice';
import CreateInvoice from './components/createInvoice';
import ViewCourses from './components/ViewCourses';
import React, {useState} from 'react';
export const ToggleContext = React.createContext();

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value = {{toggle,setToggle}}>
      <Header/>
      <main style = {{display:'flex', background:'beige'}}>
        <SimpleSidebar />
        <ViewInvoice />
        <CreateInvoice/>
        <ViewCourses />
      </main>
    </ToggleContext.Provider>
  );
}

export default App;
