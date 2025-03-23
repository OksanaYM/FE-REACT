import './App.css'
import MyComponents from "./MyComponents/myComponents.tsx";
import myComponents from "./MyComponents/myComponents.tsx";

function App() {

  return (
    <>
      <MyComponents text={'hello-1'}/>
        {myComponents({text:'hello-2'})}
    </>
  )
}

export default App;
