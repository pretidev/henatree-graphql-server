declare module "entities" {

  export interface User {
    id: number,
    nickname: string,
    email: string,
    birthday: string,
  }

  export interface Outing {
    id: number,
    type: string,
    date: string,
    nbGuest: {
      min: number,
      max?: number,
    },
    author: User,
  }
}