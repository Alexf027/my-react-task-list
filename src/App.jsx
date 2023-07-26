import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu';
import { Homepage } from './pages/Homepage';
import { Taskpage } from './pages/Taskpage';
import { Aboutpage } from './pages/Aboutpage';

function App() {

	return (
		<div>
			<BrowserRouter>
				<Menu/>
				<Routes>
					<Route path='/' element={<Homepage/>}/>
					<Route path='/task' element={<Taskpage/>}/>
					<Route path='/about' element={<Aboutpage/>}/>
					<Route path="*" element={(
                    <>
                    <h1>Error 404</h1> 
                    <strong>This page does not exist</strong>
                    </>
                    )}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;
