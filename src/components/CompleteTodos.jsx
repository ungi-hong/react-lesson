import "./CompleteTodos.css";

export const CompleteTodos = ({ todos, onClick }) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClick(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
