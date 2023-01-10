import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
	searchValue: string;
	onChangeData: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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

const SearchInput = styled.input`
	height: 4rem;
	border-radius: 0.5rem;
	border: 0.1rem solid #ddd;
	padding-left: 1rem;
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
