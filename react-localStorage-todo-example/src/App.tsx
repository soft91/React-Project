import React from "react";
import Todo from "./components/Todo";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50rem;
	margin: 0 auto;
	border: 1px solid black;
	border-radius: 3px;
	font-size: 10px;
`;

function App() {
	return (
		<Container>
			<Todo />
		</Container>
	);
}

export default App;
