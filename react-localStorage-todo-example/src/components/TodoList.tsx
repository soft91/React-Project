import styled from "styled-components";
import ReviewItem from "./TodoItems";

interface Item {
	id?: number;
	title: string;
	comment: string;
}

interface Props {
	todoItems: Item[];
	searchValue: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px 0px;
	padding: 15px;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 18px;
`;

const TodoList = ({ todoItems, searchValue }: Props) => {
	return (
		<Container>
			<Title>TODO 내역</Title>
			<ReviewItem
				ItemData={todoItems.filter((item) => {
					return item.title.match(new RegExp(searchValue, "i"));
				})}
			/>
		</Container>
	);
};

export default TodoList;
