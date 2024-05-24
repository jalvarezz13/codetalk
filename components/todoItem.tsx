import { TodoItemProps } from "@/models/todo"

import { Card, CardBody, Progress, Chip } from "@nextui-org/react"

const getColorByStatus = (status: TodoItemProps["status"]) => {
    switch (status) {
      case "done":
        return "success"
      case "pending":
        return "warning"
      case "failed":
        return "danger"
    }
  }

export const TodoItem = ({ status, title, id, percentage }: TodoItemProps) => {
  return (
    <Card className="w-full">
      <CardBody className="flex flex-col gap-1">
        <p>{title}</p>
        <div className="flex flex-row items-center justify-between gap-3">
          <Progress value={percentage} className="w-3/4" />
          <Chip color={getColorByStatus(status)}>{status.toUpperCase()}</Chip>
        </div>
      </CardBody>
    </Card>
  )
}
