
import style from './index.module.css'

function CreateNavigation (props) {
  
    const showAll = props.showAll;
    const setShowAll = props.setShowAll;
    const setTodoList = props.setTodoList;
    const todoList = props.todoList;

    function deleteCompletedTodo(completed) {
        const newComplTodoList = [];
        todoList.forEach( (todo) => {
          if (!todo.completed) {
          } newComplTodoList.push(todo);
        })
        setTodoList(newComplTodoList);
      }
    return (
    <ul className={style.navigation}>
        <li 
            className={style.itemLeft}
            
        >{todoList.length} items left</li>
        <li>
            <ul className={style.toggle}>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
        </li>
        <li 
        // onClick={deleteCompletedTodo(todo.completed)} 
        onClick={ () => setTodoList([])} 
        className={style.deleteCompleted}>Clear completed
        </li>
  </ul>
    )
};

export default CreateNavigation;