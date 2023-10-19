import { Login } from './pages/Login';
import { Profilepage } from './pages/Profilepage';
import { Register } from './pages/Register';
import { Menu } from './components/Menu';
import { Homepage } from './pages/Homepage';
import { Taskspage } from './pages/Taskspage';
import { Aboutpage } from './pages/Aboutpage';
import { Footer } from './components/Footer';
import { Errorpage } from './pages/Errorpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react'
import { AuthProvider } from './context/authContext';
import { TodoAppPage } from './pages/TodoAppPage';
import { ProtectedRoute } from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';

function App() {

	return (
		<AuthProvider>
			<TaskProvider>
			<BrowserRouter>
			<Box as='header' bg='#F5F5F5' h="9.2vh">
			<Flex justify='space-between'>
			<Menu/>
			</Flex>
			</Box>
			<Box bg='#EAEBEE' h='70vh' >
				<Routes>
				    <Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
					<Route path='/' element={<Homepage/>}/>
					<Route path='/about' element={<Aboutpage/>}/>
					<Route path='*' element={<Errorpage/>}/>
					
				<Route element={<ProtectedRoute/>} >
					<Route path='/profile' element={<Profilepage/>}/>
					<Route path='/todoapp' element={<TodoAppPage/>}/>
					<Route path='/tasks' element={<Taskspage/>} />
					<Route path='/tasks/:id' element={<Taskspage/>}/>
				</Route>
				</Routes>
			</Box>	
				<Footer/>
		</BrowserRouter>
	   </TaskProvider>
	</AuthProvider>
	)
}
export default App;
