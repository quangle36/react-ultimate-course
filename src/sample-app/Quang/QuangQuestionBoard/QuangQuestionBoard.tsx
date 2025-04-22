import { questions, submissions } from './data';
import styles from './QuangQuestionBoard.module.css'
interface IQuestion {
	id: string;
	name: string;
	category: string;
}
interface ICategory {
	[category: string]: IQuestion[];
}
enum SubmissionStatus {
	CORRECT = 'CORRECT',
	INCORRECT = 'INCORRECT',
	PARTIALLY_CORRECT = 'PARTIALLY_CORRECT'
}
const QuangQuestionBoard = () => {

	const groupedCategory: ICategory = questions.reduce(
		(acc: ICategory, question: IQuestion) => {
			(acc[question.category] ||= []).push(question);
			return acc;
		},
		{} as ICategory
	);

	const renderStatus = (status: SubmissionStatus) => {
		if (status === SubmissionStatus.INCORRECT) {
			return <div className={styles["red-dot"]} />
		}
		if (status === SubmissionStatus.CORRECT) {
			return <div className={styles["green-dot"]} />
		}
		return <div className={styles["yellow-dot"]} />
	}
	console.log(Object.keys(groupedCategory));

	return (
		<div className={styles.container}>
			{Object.keys(groupedCategory).map((category) => {
				const correctSubmission = submissions.filter(submission => submission.status === SubmissionStatus.CORRECT).map(submission => submission.questionId)
				const correctQuestion = groupedCategory[category].filter(question => {
					return correctSubmission.includes(question.id)
				}).length
				return (
					<div>
						<h2>{category} - {correctQuestion}/{groupedCategory[category].length}</h2>
						{groupedCategory[category].map((question) => {
							const status = submissions.find(submission => submission.questionId === question.id)?.status as SubmissionStatus
							return <div key={question.id} className={styles.question}>
								{renderStatus(status)}
								<span>{question.name}</span>
							</div>;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default QuangQuestionBoard;
