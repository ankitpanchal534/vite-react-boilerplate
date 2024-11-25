import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_admin/settings!'
}
