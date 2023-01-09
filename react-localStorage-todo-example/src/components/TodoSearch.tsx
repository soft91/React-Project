import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
	searchValue: string;
	onChangeData: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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

const SearchInput = styled.input`
	height: 40px;
	border-radius: 5px;
	border: 1px solid #ddd;
	padding-left: 10px;
`;

const TodoSearch = ({ searchValue, onChangeData }: Props) => {
	return (
		<Container>
			<Title>TODO 검색</Title>
			<SearchInput
				placeholder="TODO 제목을 입력해 주세요"
				value={searchValue}
				onChange={onChangeData}
			/>
		</Container>
	);
};

export default TodoSearch;
