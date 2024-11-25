import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/hello')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_admin/_auth/hello!'
}
