export const App = () => {
	// export - декларативный
	const currentYear = new Date().getFullYear(); // декларативный стиль
	return (
		<div className="App">
			<header className="App-header">
				<p>{currentYear}</p>
			</header>
		</div>
	);
};
