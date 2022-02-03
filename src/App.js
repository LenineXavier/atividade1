import { Counter } from "./Components/Counter";
import {IdCard} from "./Components/IdCard";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <div className="IdCard">
          <h1>IdCard</h1>
        <IdCard 
        lastName='Doe' 
        firstName='John' 
        gender="male" 
        height={178}
        birth={new Date("1992-07-14") } 
        picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"/>

          
        </div>

          <Counter/>

        <div>


        </div>

      </header>
    </div>
  );
}

export default App;
