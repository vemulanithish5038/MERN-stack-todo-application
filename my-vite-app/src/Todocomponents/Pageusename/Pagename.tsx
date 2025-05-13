import todologo from '../assets/todo.svg'
import './Pagename.css'
import { memo } from 'react'

function Pagename() {
    return(
        <div className="todo-application">
            <h2 className="application-use">TODO-LIST</h2>
            <a href="https://todo.dev" target="_blank">
            <img src={todologo} className="todologo" alt="todo logo" />
            </a>
        </div>
    ) 
}

export default memo(Pagename);