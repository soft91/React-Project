import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface Items {
	id?: number;
	title: string;
	comment: string;
}

interface Props {
	addData: Items;
	onChangeData: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	onAdd: () => void;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem 0;
	padding: 1.5rem;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 1.8rem;
`;

const Input = styled.input`
	height: 4rem;
	border-radius: 0.5rem;
	border: 0.1rem solid #ddd;
	padding-left: 1rem;
`;

const Text = styled.span`
	color: "#green";
	font-size: 1.4rem;
`;

const Button = styled.button`
	height: 5rem;
	background-color: red;
	border: 0;
	border-radius: 0.5rem;
	color: #fff;
	font-size: 1.5rem;
`;

const TodoForm = ({ addData, onChangeData, onAdd }: Props) => {
	return (
		<Container>
			<Title>TODO 등록</Title>
			<Text>TODO 제목</Text>
			<Input
				name="title"
				placeholder="제목을 입력해 주세요"
				value={addData.title}
				onChange={onChangeData}
			/>
			<Text>TODO 내용</Text>
			<Input
				name="comment"
				value={addData.comment}
				placeholder="내용을 입력해 주세요"
				onChange={onChangeData}
			/>
			<Button onClick={onAdd}>등록</Button>
		</Container>
	);
};

export default TodoForm;
