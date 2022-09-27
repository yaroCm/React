import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { FormHook } from './02-useEffect/FormHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { MultipleCustomHook } from './03-Example/MultipleCustomHook';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { MemoHook } from './06-useMemos/MemoHook';
import { Memorize } from './06-useMemos/Memorize';
import { HooksApp } from './HooksApp';
import './index.css';
// import '../src/07-useReducer/intro';
import { TodoApp } from './07-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
