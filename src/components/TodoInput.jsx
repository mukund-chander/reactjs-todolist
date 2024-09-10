export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  function enter() {
    handleAddTodos(todoValue);
    setTodoValue("");
  }

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
        onKeyDown={(e) => (e.keyCode === 13 ? enter() : null)}
      />
      <button
        onClick={() => {
          enter();
        }}
      >
        Add
      </button>
    </header>
  );
}
