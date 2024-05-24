export interface TodoItemProps {
    id: number
    title: string
    status: "done" | "pending" | "failed"
    percentage: number
}