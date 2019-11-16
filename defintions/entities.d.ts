declare module "entities" {
  export interface User {
    _id: string,
    nickname: string,
    email: string,
    birthday: string,
  }

  export interface Outing {
    _id: string,
    type: string,
    date: string,
    nbGuest: {
      min: number,
      max?: number,
    },
    author: User,
  }
}
