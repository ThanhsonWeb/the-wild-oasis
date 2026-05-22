import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
	background: #a49999;
	padding: 2rem;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Row>
					<Row type="horizontal">
						<Heading as="h1">Hello em anh cho</Heading>;
						<div>
							<Button onClick={() => alert("hello")}>Check in</Button>
							<Button
								variation="danger"
								size="medium"
								onClick={() => alert("bye")}
							>
								Check in
							</Button>
						</div>
					</Row>
					<Row>
						<div>
							<Heading as="h4">Form</Heading>
							<Input type="text" placeholder="name.." />
							<Input type="number" placeholder="number.." />
						</div>
					</Row>
				</Row>
			</StyledApp>
		</>
	);
}

export default App;
