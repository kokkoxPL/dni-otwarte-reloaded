import { useState, useEffect } from "react";
import { socket } from "../socket";
import ResultsTable from "./ResultsTable";
import originalQuestions from "../questions.json"

const shuffle = (array: Question[]) => {
	let currentIndex = array.length, randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}

	return array;
}

const questions = shuffle(originalQuestions)

interface Question {
	question: string;
	answers: string[];
	correctAnswer: number;
}

const Quiz = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [school, setSchool] = useState("");
	const [city, setCity] = useState("");
	const [answers, setAnswers] = useState<number[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [formFilled, setFormFilled] = useState(false);
	const [quizFinished, setQuizFinished] = useState(false);

	useEffect(() => {
		socket.emit("computer_connected", localStorage.getItem("computer"));
		return () => {
			console.log("heyya");
			socket.emit("computer_disconnected");
		};
	}, []);

	const showScore = () => {
		let score = 0;
		questions.forEach((questionData, i) => {
			if (answers[i] === questionData.correctAnswer) {
				score += 1;
			}
		});
		setScore(score);
		setQuizFinished(true);
		socket.emit("save_results", username, score);
	}

	const setAnswer = (question: number, answer: number)  => {
		if (answers[question] !== undefined) {
			setAnswers(
				answers.map((a, i) => {
					if (i !== question) {
						return a;
					}
					return answer;
				})
			);
		} else {
			const newAnswers = [...answers];
			newAnswers[question] = answer;
			setAnswers(newAnswers);
		}
	}

	const startQuiz = () => {
		if (username && school && city) {
			setFormFilled(true);
		}
	}

	useEffect(() => {
		socket.emit("question_changed", currentQuestion);
	}, [currentQuestion]);

	useEffect(() => {
		socket.emit("answers", answers);
	}, [answers]);

	useEffect(() => {
		socket.emit("name", name);
	}, [name]);

	useEffect(() => {
		socket.emit("username", username);
	}, [username]);

	useEffect(() => {
		socket.emit("school", school);
	}, [school]);

	useEffect(() => {
		socket.emit("city", city);
	}, [city]);

	return (
		<>
			{!formFilled && (
				<div className="my-[100px] w-[80%] m-auto bg-black text-white px-[20px] py-[100px] rounded-3xl justify-center text-center grid grid-cols-[30%_2px_69%]" id="formularz">
					<div className="form_content">
						<h1 className=" font-orbitron text-[40px] text-center m-auto py-[50px]">WPROWADŹ DANE, ABY ROZPOCZĄĆ QUIZ O NASZEJ SZKOLE</h1>
					</div>
					<div className=" w-[2px] h-[100%] ml-[20px] bg-[crimson]"></div>
					<div className="form my-auto">
						<div className="justify-center m-auto text-center grid grid-cols-2">
													<p className="text-[20px] font-mono text-right">Imię i nazwisko (opcjonalnie): </p>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							className="dane w-[50%] bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px] 
										focus:outline-none outline-transparent focus:border-white transition-all duration-300"
							name="dane"
						/></div>
						<br />

									<div className=" justify-center m-auto text-center grid grid-cols-2">
										<p className="text-[20px] font-mono text-right">Pseudonim: </p>
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							type="text"
							// placeholder="Pseudonim"
							className="dane w-[50%] bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px]
										focus:outline-none outline-transparent focus:border-white transition-all duration-300"
							name="nick"
							id="nickName"
						/>
										</div>
						<br />

											<div className=" justify-center m-auto text-center grid grid-cols-2">
											<p className="text-[20px] font-mono text-right">Szkoła: </p>
						<input
							value={school}
							onChange={(e) => setSchool(e.target.value)}
							type="text"
							// placeholder="Szkoła"
							className="dane w-[50%] bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px]
											focus:outline-none outline-transparent focus:border-white transition-all duration-300"
							name="szkola"
						/>
											</div>
						<br />

											<div className=" justify-center m-auto text-center grid grid-cols-2">
											<p className="text-[20px] font-mono text-right">Miejscowość: </p>
						<input
							value={city}
							onChange={(e) => setCity(e.target.value)}
							type="text"
							// placeholder="Miejscowość"
							className="dane w-[50%] bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px]
										focus:outline-none outline-transparent focus:border-white transition-all duration-300"
							name="miejscowosc"
						/>
											</div>
						<br />

						<button className="send mt-[30px] border-[2px] border-[crimson] rounded-full px-[25px] py-[10px] font-gruppo font-extrabold text-[20px] hover:bg-[crimson] hover:text-white transition-all duration-300" id="send" onClick={startQuiz}>
							Rozpocznij
						</button>
					</div>
				</div>
			)}

			{quizFinished && (
				<div className="formularz bg-black w-[80%] mx-auto my-[100px] py-[50px] grid grid-cols-[30%_10px_69%] rounded-3xl" id="formularz">
					<div className="text-center">
						<h1 className="text-[crimson] font-gruppo font-bold text-[60px]">Twój Wynik:</h1>
						<div className="">
						<h2 className=" font-orbitron text-white text-[40px]">
							<span className="text-[70px]">{score}</span>/{questions.length}
						</h2>
						</div>
					</div>
					<div className="w-[2px] h-[100%] bg-[crimson] ml-[-60px]"></div>
					<div>
						<ResultsTable overflow="scroll" />
					</div>
				</div>
			)}

			{(formFilled && !quizFinished) && (
				<div className="quiz" id="quiz">
					<div className="questions my-[100px] w-[80%] m-auto bg-black rounded-3xl text-white px-[20px] py-[100px] grid grid-cols-2">
						<div>
						<h1 className="font-orbitron text-[40px] ml-[50px]">Pytanie <span className="text-[crimson]">{currentQuestion + 1}</span></h1>
						<p className="text-[25px] font-gruppo font-extrabold ml-[150px]">{questions[currentQuestion].question}</p>
						<div className="answers ml-[150px]">
							<ul>
								{questions[currentQuestion].answers.map((answer, i2) => (
									<li key={answer} className="font-orbitron my-[10px] text-[20px]">
										<label className="p-[10px] rounded-xl hover:bg-white/20">
											<input
												type="radio"
												className="in-radio mr-[10px] accent-[crimson]"
												onChange={(e) => setAnswer(currentQuestion, i2)}
												checked={answers[currentQuestion] === i2}
											/>
											{answer}
										</label>
									</li>
								))}
							</ul>

							<div className="buttons absolute bottom-[20%] ml-[-50px]">
								{currentQuestion !== 0 ? (
									<button className="prev mx-[10px] mt-[40px] px-[25px] py-[10px] border-[2px] border-[crimson] font-gruppo font-extrabold text-[20px] text-[#ffa9ba] rounded-full hover:bg-[crimson] hover:text-black transition-all duration-300" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
										Poprzednie
									</button>
								) : (
									<></>
								)}
								{currentQuestion !== questions.length - 1 ? (
									<button className="next mx-[10px] mt-[40px] px-[25px] py-[10px] border-[2px] border-[crimson] font-gruppo font-extrabold text-[20px] text-[#ffa9ba] rounded-full hover:bg-[crimson] hover:text-black transition-all duration-300" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
										Następne
									</button>
								) : (
									<></>
								)}
								{currentQuestion === questions.length - 1 ? (
									<button className="next mx-[10px] mt-[40px] px-[25px] py-[10px] border-[2px] border-[crimson] font-gruppo font-extrabold text-[20px] text-[#ffa9ba] rounded-full hover:bg-[crimson] hover:text-black transition-all duration-300" onClick={showScore}>
										Zakończ
									</button>
								) : (
									<></>
								)}
							</div>
						</div>
						</div>
						<video loop autoPlay muted className="rounded-full">
							<source src="/banach.mp4" type="video/mp4">
							</source>
						</video>
					</div>
				</div>
			)}
		</>
	)
}

export default Quiz;