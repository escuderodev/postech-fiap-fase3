import { useState } from 'react';
import ListTask from './components/ListTask/ListTask';
import AddTask from './components/AddTask/AddTask';

interface Task {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
  };

  return (
    <div className='app-container'> {
      <>
        <h1>Lista de Tarefas</h1>
        <AddTask onAddTask={addTask} />
        <ListTask tasks={tasks} />
      </>
    }</div>
  )
}

export default App;