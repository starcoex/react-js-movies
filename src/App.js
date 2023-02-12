import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentValue) => [toDo, ...currentValue]);
    setToDo('');
  };
  console.log(toDos);
  return (
    <div>
      <h1>My to Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder='Write your to do...'
        />
        <button>Click</button>
        <hr />
        <ul>
          {toDos.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
