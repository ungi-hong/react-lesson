import './App.css';

function App() {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <div>
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>完了したTODO</p>
        <ul>
          <div>
            <li>TODOでした</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default App;
