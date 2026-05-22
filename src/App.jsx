import styled from "styled-components";

const H1 = styled.h1`
	font-size: 30px;
	font-weight: 600;
`;

const Button = styled.button`
	font-size: 1.4rem;
	padding: 1rem 1.5rem;
	background-color: #734646;
	color: white;
	border-radius: 10px;
`;

const Input = styled.input`
	border-radius: 10px;
	padding: 1rem;
`;

const StyledApp = styled.div`
	background: #a49999
	padding: 2rem;
`;

function App() {
	return (
		<StyledApp>
			<H1>Hello em anh cho</H1>;
			<Button onClick={() => alert("hello")}>Check in</Button>
			<Button onClick={() => alert("bye")}>Check in</Button>
			<Input type="text" placeholder="name.." />
		</StyledApp>
	);
}

export default App;
