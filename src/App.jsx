import "./App.css";

const user = {
	firstName: "Max",
};

function App() {
	return <div className="app">Hello, {user.firstName}!</div>;
}

export default App;
