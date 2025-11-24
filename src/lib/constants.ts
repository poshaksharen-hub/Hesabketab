export const ALLOWED_USERS = [
  'ali@khanevadati.app',
  'fatemeh@khanevadati.app',
];

type UserDetail = {
  id: string;
  firstName: string;
  lastName: string;
};

// Define a more specific type for the USER_DETAILS object
type UserDetailsRecord = {
  [key in 'ali' | 'fatemeh']: UserDetail;
};

export const USER_DETAILS: UserDetailsRecord = {
  ali: {
    id: 'gHZ9n7s2b9X8fJ2kP3s5t8YxVOE2',
    firstName: 'علی',
    lastName: 'کاکایی',
  },
  fatemeh: {
    id: 'iwXrEC4MPze90eK0BExOdqMdTZ43',
    firstName: 'فاطمه',
    lastName: 'صالح',
  },
};