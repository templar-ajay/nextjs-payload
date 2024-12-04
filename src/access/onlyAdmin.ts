import { Access } from 'payload'

export const onlyAdmin: Access = ({ req: { user } }) => {
  if (user?.collection === 'users') {
    return true
  }
  return false
}
