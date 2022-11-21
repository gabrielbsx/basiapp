import routes from '../constants/routes-guest.constants'

export default function isGuestRoute(route: string) {
  return routes.some((r) => r.path === route);
}