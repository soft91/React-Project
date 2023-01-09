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
	gap: 10px 0px;
	padding: 15px;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 18px;
`;

const Input = styled.input`
	height: 40px;
	border-radius: 5px;
	border: 1px solid #ddd;
	padding-left: 10px;
`;

const Text = styled.span`
	color: "#green";
	font-size: 14px;
`;

const Button = styled.button`
	height: 50px;
	background-color: red;
	border: 0;
	border-radius: 0.5rem;
	color: #fff;
	font-size: 15px;
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
