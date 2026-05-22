import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
	background: #a49999;
	padding: 2rem;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Heading as="h1">Hello em anh cho</Heading>;
				<Button onClick={() => alert("hello")}>Check in</Button>
				<Button onClick={() => alert("bye")}>Check in</Button>
				<Input type="text" placeholder="name.." />
				<Input type="text" placeholder="name.." />
				<Heading as="h4">Wake up</Heading>
			</StyledApp>
		</>
	);
}

export default App;
