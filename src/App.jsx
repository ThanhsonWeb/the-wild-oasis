import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input.jsx";

const H1 = styled.h1`
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 1rem;
`;

const StyledApp = styled.div`
	background: #a49999;
	padding: 2rem;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<H1>Hello em anh cho</H1>;
				<Button onClick={() => alert("hello")}>Check in</Button>
				<Button onClick={() => alert("bye")}>Check in</Button>
				<Input type="text" placeholder="name.." />
				<Input type="text" placeholder="name.." />
			</StyledApp>
		</>
	);
}

export default App;
