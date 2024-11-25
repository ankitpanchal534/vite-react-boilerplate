import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/my-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_admin/my-profile!'
}
