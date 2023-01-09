import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";

interface Item {
	id?: number;
	title: string;
	comment: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px 0px;
	width: 100%;
`;

const ReviewComponent = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [todoItems, setTodoItems] = useState<Item[]>(() => {
		const saveTodoItems = localStorage.getItem("todoItems");
		if (saveTodoItems) {
			return JSON.parse(saveTodoItems);
		} else {
			return [];
		}
	});
	const [todoItem, setTodoItem] = useState<Item>({
		id: 0,
		comment: "",
		title: "",
	});

	const AddReview = useCallback(() => {
		setTodoItems([...todoItems, todoItem]);
		setTodoItem({
			id: 0,
			title: "",
			comment: "",
		});
	}, [todoItem, todoItems]);

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			setTodoItem((prev) => ({
				...prev,
				id: todoItems.length + 1,
				[e.target.name]:
					e.target.name === "score" ? +e.target.value : e.target.value,
			}));
		},
		[todoItems]
	);

	const SearchReviewItems = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			setSearchValue(e.target.value);
		},
		[]
	);

	useEffect(() => {
		localStorage.setItem("todoItems", JSON.stringify(todoItems));
	}, [todoItems]);

	return (
		<Container>
			<TodoForm
				addData={todoItem}
				onChangeData={handleChange}
				onAdd={AddReview}
			/>
			<TodoSearch
				searchValue={searchValue}
				onChangeData={SearchReviewItems}
			/>
			<TodoList todoItems={todoItems} searchValue={searchValue} />
		</Container>
	);
};

export default ReviewComponent;
