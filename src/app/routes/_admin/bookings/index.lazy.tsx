import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_admin/bookings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_admin/bookings/!'
}
