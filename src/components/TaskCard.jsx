import { BsFillTrashFill } from 'react-icons/bs'
import styles from './TaskCard.module.css'


function TaskCard({ id, task, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
   
    return (

        <div className={styles.card}>
            <div>
                <input type='checkbox' name='task' id={id} />
                <label htmlFor='name'>{task} </label>
            </div>
            <div>
                <BsFillTrashFill onClick={remove} />
            </div>
        </div>
    )
}

export default TaskCard