import JSX from './JSX';
import Props from './Props';
import QuangColorBox from './sample-app/QuangColorBox/QuangColorBox';
import State from './State';
import HandleEvent from './HandleEvent';
import ListKey from './ListKey';
import LiftingStateUp from './LiftingStateUp';
import TonyColorBox from './sample-app/QuangColorBox/TonyColorBox';
import DatColorBox from './sample-app/Dat/DatGenerateBox';
import Form from './Form';
import StateHook from './StateHook';
import QuangQuestionBoard from './sample-app/QuangQuestionBoard/QuangQuestionBoard';
import QuangForm from './sample-app/QuangForm/Form';
import JobBoard from './sample-app/QuangJobBoard';
import TonyQuestionBoard from './sample-app/TonyQuestionBoard/TonyQuestionBoard';
import Tonycloned from './sample-app/QuangJobBoard/tonycloned';
import Product from './wrapper-components/Product';
import WrapperComponent from './wrapper-components/WrapperComponent';

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
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			{/* <QuangForm /> */}
			<JobBoard />

			<br />

			<TonyQuestionBoard />

			<WrapperComponent>
				<Tonycloned />
			</WrapperComponent>

			<WrapperComponent>
				<Product />
			</WrapperComponent>

		</>
	);
}

export default App;
