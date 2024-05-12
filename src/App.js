import './App.css';
import Card from './components/Card';
import New from './components/New';

function App() {
  function printData(data){
    console.log(data)
    console.log("inside the app.js")
  }
  return (
  <div>
    <New  akash = {printData}/>
    
    <Card/>
   
  </div>
   
  );
}

export default App;
