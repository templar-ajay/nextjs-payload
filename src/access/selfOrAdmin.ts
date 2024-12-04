import { Access } from 'payload'

export const selfOrAdmin: Access = ({ req: { user } }) => {
  if (user?.collection == 'users') {
    return true
  }

  return {
    id: {
      equals: user?.id,
    },
  }
}
