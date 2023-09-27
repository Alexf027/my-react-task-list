import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Menu } from './components/Menu';
import { Homepage } from './pages/Homepage';
import { Taskpage } from './pages/Taskpage';
import { Aboutpage } from './pages/Aboutpage';
import { Footer } from './components/Footer';
import { Errorpage } from './pages/Errorpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react'

function App() {

	return (
		<>
			<BrowserRouter>
			<Box as='header' bg='#F5F5F5' >
			<Flex justify='space-between'>
			<Menu/>
			</Flex>
			</Box>
			<Box bg='#EAEBEE' h='63vh' >
				<Routes>
				    <Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
					<Route path='/' element={<Homepage/>}/>
					<Route path='/task' element={<Taskpage/>}/>
					<Route path='/about' element={<Aboutpage/>}/>
					<Route path="*" element={<Errorpage/>}/>
				</Routes>
			</Box>	
				<Footer/>
			</BrowserRouter>
		</>
	)
}
export default App;
