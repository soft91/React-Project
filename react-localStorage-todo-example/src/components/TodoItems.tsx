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
	gap: 10px 0px;
	padding: 15px;
`;

const BoxContainer = styled.div`
	display: flex;
	border-color: #ddd;
	border-radius: 10px;
	background-color: #fff;
	flex-direction: column;
	gap: 20px 0px;
	padding: 50px;
	border: 1px solid #ddd;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 18px;
`;

const Text = styled.span`
	font-size: 14px;
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
