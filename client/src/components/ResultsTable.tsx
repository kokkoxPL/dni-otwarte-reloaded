import { useEffect, useState } from "react";
import { socket } from "../socket";

interface ResultEntry {
	name: string;
	result: number;
}

const ResultsTable = (props: { overflow: "hide" | "scroll" }) => {
	const [results, setResults] = useState<ResultEntry[]>([]);

	useEffect(() => {
		socket.on("results", (results: ResultEntry[]) => {
			console.log(results);
			const sorted = results.sort((a, b) => {
				return b.result - a.result;
			});
			setResults(props.overflow === "hide" ? sorted.slice(0, 10) : sorted);
		});
		socket.emit("get_results");

		return () => {
			socket.off("results");
		};
	}, []);
	return (
		<div
			className="results-wrapper my-[100px] bg-black"
			style={{
				padding: props.overflow === "hide" ? "5rem" : "",
				overflowY: props.overflow === "scroll" ? "auto" : "hidden",
			}}
		>
			<table style={{ width: "100%", color: "white", fontSize: "2rem" }}>
				<thead>
					<tr>
						<td>Miejsce</td>
						<td>Nazwa</td>
						<td>Punkty</td>
					</tr>
				</thead>
				<tbody>
					{results.map((result, i) => (
						<tr key={i} className="border-b-[2px] border-[crimson]">
							<td>{i + 1}</td>
							<td>{result.name}</td>
							<td>{result.result}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ResultsTable;