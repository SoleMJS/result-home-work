import React, { useState } from "react";
import "./App.css";

export const App = () => {
	const [firstOperand, setFirstOperand] = useState("");
	const [secondOperand, setSecondOperand] = useState("");
	const [operator, setOperator] = useState("");
	const [isResult, setIsResult] = useState(false);

	const handleCountClick = (count) => {
		if (isResult) {
			setFirstOperand(count);
			setIsResult(false);
		} else {
			if (operator) {
				setSecondOperand(secondOperand + count);
			} else {
				setFirstOperand(firstOperand + count);
			}
		}
	};

	const handleOperatorClick = (click) => {
		if (click === "C") {
			setFirstOperand("");
			setOperator("");
			setSecondOperand("");
			setIsResult(false);
		} else if (click === "=") {
			if (secondOperand) {
				let result;
				switch (operator) {
					case "+":
						result =
							parseInt(firstOperand) + parseInt(secondOperand);
						break;
					case "-":
						result =
							parseInt(firstOperand) - parseInt(secondOperand);
						break;
					default:
						break;
				}
				setFirstOperand(result.toString());
				setOperator("");
				setSecondOperand("");
				setIsResult(true);
			}
		} else {
			setOperator(click);
			setIsResult(false);
		}
	};

	return (
		<div className="calculator">
			<div className={`display ${isResult ? "result" : ""}`}>
				{firstOperand} {operator} {secondOperand}
			</div>
			<div className="buttons">
				{[...Array(10).keys()].map((count) => (
					<button
						key={count}
						onClick={() => handleCountClick(count.toString())}
					>
						{count}
					</button>
				))}
				<button onClick={() => handleOperatorClick("+")}>+</button>
				<button onClick={() => handleOperatorClick("-")}>-</button>
				<button onClick={() => handleOperatorClick("=")}>=</button>
				<button onClick={() => handleOperatorClick("C")}>C</button>
			</div>
		</div>
	);
};
