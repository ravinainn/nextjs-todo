"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  // let renderTask = <h2>No Task Available</h2>;
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Ravi's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title Here"
          className="text-2xl border-2 border-zinc-800 m-5 px-4 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description Here"
          className="text-2xl border-2 border-zinc-800 m-5 px-4 py-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          // onSubmit={() => {
          //   submitHandler;
          // }}
          className="m-5 bg-black text-white text-2xl font-bold rounded px-4 py-2"
        >
          Add Task
        </button>
      </form>
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}
