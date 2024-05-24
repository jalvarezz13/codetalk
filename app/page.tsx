"use client"

import { useState, useEffect } from "react"

import { Pagination } from "@nextui-org/react"

import { TodoItemProps } from "@/models/todo"
import { TodoItem } from "@/components/todoItem"

export default function Home() {
  const [todos, setTodos] = useState<TodoItemProps[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const rawTodos: TodoItemProps[] = [
      {"id": 1, "title": "Design the overall project architecture and layout", "status": "done", "percentage": 100},
      {"id": 2, "title": "Develop a fully functional FastAPI application with user management", "status": "done", "percentage": 90},
      {"id": 3, "title": "Deploy the FastAPI application to a cloud service provider", "status": "pending", "percentage": 55},
      {"id": 4, "title": "Write comprehensive unit and integration tests for all endpoints", "status": "pending", "percentage": 10},
      {"id": 5, "title": "Integrate a robust relational database to store user data securely", "status": "failed", "percentage": 25},
      {"id": 6, "title": "Develop an intuitive and responsive frontend using a modern JavaScript framework", "status": "pending", "percentage": 80},
      {"id": 7, "title": "Implement secure user authentication and authorization mechanisms", "status": "pending", "percentage": 20},
      {"id": 8, "title": "Write a detailed tutorial covering the entire development process from start to finish", "status": "failed", "percentage": 50}
  ]
  const limit = 5
  const offset = (page - 1) * limit
  setTodos(rawTodos.slice(offset, offset + limit))
  }, [page])

  return (
    <main className="flex flex-col items-center gap-2 w-full">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />
      })}
      <Pagination total={2} initialPage={1} onChange={setPage} />
    </main>
  )
}
