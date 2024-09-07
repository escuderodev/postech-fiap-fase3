import React, { useState } from "react";

interface AddTaskProps {
    onAddTask: (taskName: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const handleSbmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(taskName);
        setTaskName(''); //limpa os campos após add
    };
    return (
        <form onSubmit={handleSbmit}>
            <input 
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Adicione uma Nova Tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}
export default AddTask;