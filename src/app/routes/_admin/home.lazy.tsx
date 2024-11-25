import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/_admin/home')({
  component: RouteComponent,
})

function RouteComponent() {
  const [count, setCount] = useState(0)
  return (
    <>
      {count}
      <Button onClick={() => setCount((prev) => prev + 1)} className="text-lg">
        +
      </Button>
    </>
  )
}
