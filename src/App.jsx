import { Menu } from './components/Menu';
import { Homepage } from './pages/Homepage';
import { Taskpage } from './pages/Taskpage';
import { Aboutpage } from './pages/Aboutpage';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react'
import { Errorpage } from './pages/Errorpage'
import { Login } from './components/Login';

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
					<Route path='/' element={<Homepage/>}/>
					<Route path='/task' element={<Taskpage/>}/>
					<Route path='/about' element={<Aboutpage/>}/>
					<Route path="*" element={<Errorpage/>}/>
					<Route path='/login' element={<Login/>}/>
				</Routes>
			</Box>	
				<Footer/>
			</BrowserRouter>
		</>
	)
}
export default App;
