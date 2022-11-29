import logo from './logo.svg';
import './App.css';
import { increment,decrement } from './actions';
import { useSelector,useDispatch } from 'react-redux';
import MyChildComponent from './component/MyChildComponent';

function App() {

  const myState = useSelector((state)=>state.changeTheNumber) 
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>{myState}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <MyChildComponent/>
    </div>
  );
}

export default App;
