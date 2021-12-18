import "./InputTodo.css";

export const InputTodo = ({ todoText, onChange, onClick, disabled }) => {
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
