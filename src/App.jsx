import Header from './components/Header';
import {TaskList} from './components/TaskList';
import './App.css'

function App() {
  return (
    <div className='container'>
    <div className='app-wrapper'>
    <div>
    <Header/>
    </div>
    <div>
    <TaskList/>
    </div>
    </div>
    </div>
  );
}
export default App
