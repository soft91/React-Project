import React from "react";
import styled from "styled-components";

interface Item {
	id?: number;
	title: string;
	comment: string;
}

interface Items {
	ItemData: Item[];
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem 0px;
`;

const BoxContainer = styled.div`
	display: flex;
	border-color: #ddd;
	border-radius: 1rem;
	background-color: #fff;
	flex-direction: column;
	gap: 2rem 0;
	padding: 5rem;
	border: 0.1rem solid #ddd;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 1.8rem;
`;

const Text = styled.span`
	font-size: 1.4rem;
`;

const TodoItem = ({ ItemData }: Items) => {
	return (
		<Container>
			{ItemData.map((item: Item) => {
				return (
					<BoxContainer key={item.id}>
						<Title>{item.title}</Title>
						<Text>{item.comment}</Text>
					</BoxContainer>
				);
			})}
		</Container>
	);
};

export default TodoItem;
