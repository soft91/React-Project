import React from "react";
import GlobalStyle from "./globalStyled";
import Todo from "./components/Todo";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin: 0 auto;
`;

const RootDiv = styled.div`
	height: 100vh;
`;

function App() {
	return (
		<RootDiv>
			<GlobalStyle />
			<Container>
				<Todo />
			</Container>
		</RootDiv>
	);
}

export default App;
