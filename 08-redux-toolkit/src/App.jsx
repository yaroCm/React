import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from './store/slices/counter/CounterSlices';
import './App.css';

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <p>count is {value}</p>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>+</button>
        &nbsp;
        <button onClick={() => dispatch(decrement())}>-</button>
        &nbsp;
        <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
      </div>
    </div>
  );
}

export default App;
