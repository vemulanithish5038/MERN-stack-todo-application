import "./Tasknotify.css"
import { memo, useRef } from "react";

interface propstructure {
  dataextract: (task: string) => void;
}

function Tasknotify({ dataextract }: propstructure) {
  const todoInputRef = useRef<HTMLInputElement | null>(null);
  const handleInputChange = () => {
    if (todoInputRef.current?.value) {
      const todotask: string = todoInputRef.current.value
      todoInputRef.current.value = "";
      dataextract(todotask)
    }
  };

  //ref is like a classname or id through this we can use in useref directly

  return (
    <div className="inputbox">
      <input ref={todoInputRef} type="text" id="user-input-box" placeholder="Enter Some Text" />
      <button onClick={handleInputChange} className="user-submit-button">Submit</button>
    </div>
  )
}

export default memo(Tasknotify);