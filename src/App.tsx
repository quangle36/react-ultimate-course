import React from 'react';
import JSX from './JSX';
import Props from './Props';
import State from './State';
import HandleEvent from './HandleEvent';
import ListKey from './ListKey';
import LiftingStateUp from './LiftingStateUp';
import DatColorBox from './sample-app/Dat/DatGenerateBox/DatGenerateBox';
// import Form from "./Form";
import StateHook from './StateHook';
import QuangQuestionBoard from './sample-app/Quang/QuangQuestionBoard/QuangQuestionBoard';
import Form from './sample-app/Quang/QuangForm/Form';
import JobBoard from './sample-app/Quang/QuangJobBoard';
import TonyQuestionBoard from './sample-app/TonyQuestionBoard/TonyQuestionBoard';
import Product from './wrapper-components/Product';
import WrapperComponent from './wrapper-components/WrapperComponent';
import TonyJobBoard from './sample-app/TonyJobBoard';
import TraficLight from './sample-app/Quang/QuangTrafficLight';
import TonyTrafficLight from './sample-app/TonyTrafficLight';
import RefHook from './RefHook';
import DatTrafficLight from './sample-app/Dat/DatTrafficLight/DatTrafficLight';
import DatFormInfo from './sample-app/Dat/DatFormInfo/DatFormInfo';
import DatMovieForm from './sample-app/Dat/DatMovieForm/DatMovieForm';
import MovieForm from './sample-app/Quang/QuangMovieForm/MovieForm';
import QuangColorBox from './sample-app/Quang/QuangColorBox/QuangColorBox';
import TonyColorBox from './sample-app/Quang/QuangColorBox/TonyColorBox';
import PerformanceHook from './PerformanceHook';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import User from './components/user/User';
import UserInformation from './components/user/UserCart';
import UserCart from './components/user/UserInformation';
import UserSetting from './components/user/UserSetting';
import UserSettingDetail from './components/user/UserSettingDetail';
import BookKeeper from './BookKeeper';
import BookKeeperDetail from './BookKeeperDetail';
import Todo from './pages/todo';

function App() {
  const location = useLocation();

	const [timestamp, setTimestamp] = React.useState(Date.now());

  console.log('location: ', location)
	
	return (
		<>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link 
									to="/" 
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									Home
								</Link>
							</li>
							<li>
								<Link 
									to="/jsx" 
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									JSX
								</Link>
							</li>
							<li>
								<Link 
									to="/quang-color-box" 
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									Quang Color Box
								</Link>
							</li>
							<li>
								<NavLink 
									to="/props" 
									replace
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									Props
								</NavLink>
							</li>
							<li>
								<Link 
									to="/state" 
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									State
								</Link>
							</li>
							<li>
								<Link 
									to="/user" 
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									User
								</Link>
							</li>
							<li>
								<Link 
									to="/bookkeeper" 
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									Bookkeeper
								</Link>
							</li>
							<li>
								<Link 
									to="/todo" 
									className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								>
									Todo
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<hr />

			<main>
				<Routes>
					<Route path="/" element={<>this is dashboard</>} />
					<Route path="/jsx" element={<JSX />} />
					<Route path="/quang-color-box" element={<QuangColorBox />} />
					<Route path="/props" element={<Props />} />
					<Route path="/state" element={<State />} />
					<Route path="/user/:userId" element={<User />}>
						<Route index element={<>please click tab</>} />
						<Route path="information" element={<UserInformation />} />
						<Route path="cart" element={<UserCart />} />
						<Route path="setting" element={<UserSetting />}>
							<Route path=":settingId" element={<UserSettingDetail />} />
						</Route>
					</Route>
					<Route path="/bookkeeper" element={<BookKeeper />}>
						<Route index element={<div>Please choose invoice</div>} />
						<Route path=":invoiceId" element={<BookKeeperDetail />}  />
					</Route>
					<Route path="/todo" element={<Todo />} />
				</Routes>
			</main>

			<footer>
				this is footer
			</footer>
			<hr />

			<br />

			<HandleEvent />
			<br />
			<ListKey />

			<br />
			<LiftingStateUp />

			<br />
			<TonyColorBox />

			<br />
			<DatColorBox />

			<br />
			<Form />

			<br />
			<StateHook />

			<QuangQuestionBoard />

			{/* <QuangForm /> */}
			<JobBoard />

			<br />

			<TonyQuestionBoard />

			<WrapperComponent>
				<Product />
			</WrapperComponent>

			<TonyJobBoard />

			<TraficLight />

			<br />
			<TonyTrafficLight />

			<br />
			<DatTrafficLight />

			<br />
			<MovieForm />

      <br />
      <DatMovieForm />
      <br />
      <br />
      <br />
      <DatFormInfo />
      <br />
      <Form />

      <br />
      <RefHook />

			<br />
			<button type="button" onClick={() => setTimestamp(Date.now())}>Force Update</button>
			<PerformanceHook />

			<br />
			<br />
			<br />
			<br />
		
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
