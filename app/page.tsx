"use client";
import { useState } from "react";
import Modal from "ui/Modal";
import TodoItem from "ui/TodoItem";
import NoneCard from "ui/NoneCard";
import Heading from "ui/Heading";
import NewTask from "ui/NewTask";
import { TodoType } from "lib/definitions";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [modalIsOpen, setModal] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);

  const completed = todos.filter((t) => t.isComplete);
  const uncompleted = todos.filter((t) => !t.isComplete);

  const handleDelete = (id: number) => {
    setTodos([...todos.filter((t) => t.id !== id)]);
  };
  const handleMark = (id: number) => {
    const currTodo = [...todos];
    const [markedItems] = currTodo.filter((t) => t.id === id);
    markedItems.isComplete = true;
    setTodos(currTodo);
  };

  const handleClear = () => {
    setTodos([]);
    setModal(false);
  };

  return (
    <main className="bg-[#fafaf9] h-screen w-full flex flex-col items-center justify-start gap-5 pt-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80">
      <Heading
        isAdding={isAdding}
        setIsAdding={setIsAdding}
        setModal={setModal}
      />
      <AnimatePresence>
        {isAdding && (
          <NewTask
            todos={todos}
            setTodos={setTodos}
            setIsAdding={setIsAdding}
          />
        )}
      </AnimatePresence>
      {todos.length > 0 ? (
        <>
          <AnimatePresence>
            {uncompleted.map((item, i) => {
              return (
                <TodoItem
                  key={i}
                  item={item}
                  handleMark={handleMark}
                  handleDelete={handleDelete}
                />
              );
            })}
          </AnimatePresence>
          {completed.map((item, i) => {
            return (
              <TodoItem
                key={i}
                item={item}
                handleMark={handleMark}
                handleDelete={handleDelete}
              />
            );
          })}
        </>
      ) : (
        <NoneCard />
      )}
      {modalIsOpen && <Modal setModal={setModal} handleClear={handleClear} />}
    </main>
  );
}
