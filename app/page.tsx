"use client";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function Home() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [todos, setTodos] = useState<
    {
      id: number;
      task: string;
      isComplete: boolean;
    }[]
  >([]);

  const handleDelete = (id: number) => {
    setTodos([...todos.filter((t) => t.id != id)]);
  };

  return (
    <main className="bg-[#fafaf9] h-screen w-full flex flex-col items-center justify-start gap-5 pt-20 px-80">
      <section className="w-full flex justify-between">
        <div className="text-to-do-title flex justify-start items-end font-bold text-2xl">
          Things you should be doing today...
        </div>
        <div className="flex items-center justify-center gap-5">
          {!isAdding && (
            <div
              onClick={() => setIsAdding(true)}
              className="bg-to-do-blue text-to-do-white font-semibold cursor-pointer rounded-lg px-4 py-2 flex items-center justify-center "
            >
              Add New
            </div>
          )}
          <div className="text-to-do-red font-semibold cursor-pointer flex items-center justify-center ">
            Clear
          </div>
        </div>
      </section>
      {isAdding && (
        <Formik
          initialValues={{ "to-do": "" }}
          validate={(values: { "to-do": string }) => {
            const errors: { "to-do"?: string } = {};

            if (!values["to-do"]) {
              errors["to-do"] = "Required";
            } else if (values["to-do"].length > 100) {
              errors["to-do"] =
                "Title must be shorter than or equal to 100 characters";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const newTodo = [
              ...todos,
              {
                id: todos.length + 1,
                task: values["to-do"],
                isComplete: false,
              },
            ];
            setTodos(newTodo);
            console.log("values are", newTodo);
            resetForm();
            setIsAdding(false);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form
              className="w-full flex justify-between items-start"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col w-full gap-2">
                <Field
                  as="textarea"
                  placeholder="Add new to-do title..."
                  id="to-do"
                  name="to-do"
                  onChange={handleChange}
                  value={values["to-do"]}
                  className="bg-[#fafaf9] outline-none w-full resize-none"
                />
                <div className="text-to-do-error text-xs">
                  {errors["to-do"] && touched["to-do"] && errors["to-do"]}
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <div
                  onClick={() => setIsAdding(false)}
                  className="text-to-do-blue font-semibold cursor-pointer flex items-center justify-center "
                >
                  Cancel
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-to-do-blue text-to-do-white font-semibold cursor-pointer rounded-lg px-4 py-2 flex items-center justify-center "
                >
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
      {todos.length > 0 ? (
        todos.map((item, i) => {
          return (
            <section
              key={i}
              className="w-full flex flex-col items-center justify-center"
            >
              <div className=" bg-white drop-shadow text-to-do-black font-medium w-full flex items-center justify-center gap-3 rounded-lg p-3">
                <div className="text-stone-100 text-lg cursor-pointer">
                  <FaCheckCircle />
                </div>
                <div className="flex justify-start grow">{item.task}</div>
                <div
                  onClick={() => handleDelete(item.id)}
                  className="text-to-do-error text-2xl cursor-pointer"
                >
                  <IoIosRemoveCircleOutline />
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <section className="w-full flex flex-col items-center justify-center">
          <div className=" bg-white drop-shadow text-to-do-black font-medium w-full flex items-center justify-center rounded-lg p-9">
            Nothing to-do yet.
          </div>
        </section>
      )}
    </main>
  );
}
