import { useState, useEffect } from "react"

import styles from './Main.module.css'

import { TfiAgenda } from 'react-icons/tfi'

import TaskCard from "./TaskCard"
import Loading from "./Loading"

function Main() {

    const [task, setTask] = useState('')
    const [showTask, setShowTask] = useState([])
    const tasks = { task: task }
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            fetch('http://localhost:5000/tasks', {
                method: 'GET', headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json()).then((data) => {
                setShowTask(data)
                setRemoveLoading(true)
            }).catch((err) => console.log(err))
        }, 500)

    }, [])

    function AddTask(e) {
        e.preventDefault()
        if (task === '') {

            return
        }
        else{
        fetch('http://localhost:5000/tasks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(tasks) }).then((res) => res.json()).then((data) => setRemoveLoading(true))
        }
        fetch('http://localhost:5000/tasks', {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            setShowTask(data)
            setTask('')
        }).catch((err) => console.log(err))

    }

  

    function remove(id) {

        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE', headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => res.json())
            .then((data) => {
                setShowTask(showTask.filter((task) => task.id !== id))
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
    }


    return (

        <main className={styles.main}>

            {!removeLoading && (<Loading />)}
            {showTask.length == 0 && (
                <div className={styles.message}>
                    <TfiAgenda />
                    <h2>Foque no seu dia</h2>
                    <p>Realize tarefas com o Meu Dia, uma lista que é atualizada todo dia </p>

                </div>
            )}


            {showTask.length > 0 && (
                showTask.map((task) => (

                    <TaskCard task={task.task} id={task.id} key={task.id} handleRemove={remove} />

                ))

            )}


            <form onSubmit={AddTask} className={styles.form}>
                <input type="text" placeholder="Adicionar uma tarefa" value={task} onChange={(e)=>setTask(e.target.value)} />
            </form>
        </main>
    )

}

export default Main