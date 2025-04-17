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

function App() {
	return (
		<>
			<JSX />
			<br />
			<QuangColorBox />
			<Props />

			<br />

			<State />
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
			<RefHook />

			<br />
			<DatMovieForm />
			<br />
			<br />
			<br />
			<DatFormInfo />
			<br />
			<Form />
			<br />
			<br />
			<br />
			<br />
			<br />
			<MovieForm />
		</>
	);
}

export default App;
