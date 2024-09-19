import { Field, Formik } from "formik";
import { TodoType } from "lib/definitions";
import { motion } from "framer-motion";

interface NewTaskInterface {
  todos: TodoType[];
  setTodos: (curr: TodoType[]) => void;
  setIsAdding: (adding: boolean) => void;
}

export default function NewTask({
  todos,
  setTodos,
  setIsAdding,
}: NewTaskInterface) {
  const newVariants = {
    initial: {
      y: -100,
    },
    animate: {
      y: 1,
    },
    exit: {
      y: -100,
    },
  };

  return (
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
        <motion.form
          variants={newVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          className="z-0 w-full flex flex-wrap sm:flex-nowrap justify-between items-start"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full sm:w-auto flex-grow gap-2">
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
              className="text-to-do-blue text-sm sm:text-base font-semibold cursor-pointer flex items-center justify-center "
            >
              Cancel
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-to-do-blue text-to-do-white text-sm sm:text-base font-semibold cursor-pointer rounded-lg px-4 py-2 flex items-center justify-center "
            >
              Create
            </button>
          </div>
        </motion.form>
      )}
    </Formik>
  );
}
