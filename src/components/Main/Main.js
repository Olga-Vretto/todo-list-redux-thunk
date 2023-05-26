import { useDispatch, useSelector } from 'react-redux';
import { setTaskName, addTask, toggleTask, deleteTask, fetchData } from '../../store/todoSlice';
import SectionTask from '../Tasks/SectionTask';
import { useEffect } from 'react';
import './Main.css';

const Main = () => {
  const dispatch = useDispatch();
  const taskName = useSelector((state) => state.todo.taskName);
  const taskList = useSelector((state) => state.todo.taskList);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask());
  };

  const handleChange = (event) => {
    dispatch(setTaskName(event.target.value));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <main className='main'>
      <SectionTask tasks={taskList} toggleTask={handleToggle} deleteTask={handleDelete} />

      <section className='section__add-task'>
        <h2 className='main-subtitle'>Add Task</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            value={taskName}
            type='text'
            onChange={handleChange}
            className='input'
            maxLength='45'
            placeholder='Write here new task.'
          />
          <button type='submit' className='add-btn'>
            Add task
          </button>
        </form>
      </section>
    </main>
  );
};

export default Main;
