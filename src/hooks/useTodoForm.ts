import React from "react";

export const useTodoForm = () => {
  const [title, setTitle] = React.useState('');

  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  return {
    title,
    onChangeTitle,
  }
}