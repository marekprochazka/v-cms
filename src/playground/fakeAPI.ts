import { CRUD, IContentBase } from '@/core/types'


const DB: IContentBase[] = [
  {
    id: '1',
    content: '<h1>Hello, world!</h1> {{ cmp }}betweeeeeen{{ cmp-with-request }} prop: {{ prop display="TEST" }} '

  },
  {
    id: '2',
    content: '<h1>Hello, world!</h1>'

  }
]


export function getActions(): CRUD<IContentBase> {
  return {
    create: async (post: IContentBase) => {
      return await new Promise((resolve, _) => {
          resolve(post)
        }
      )
    },
    readList: async () => {
      return await new Promise((resolve, _) => {
          resolve(DB)
        }
      )
    },

    readDetail: async (id: string) => {
      return await new Promise((resolve, _) => {
          resolve(DB.find(post => post.id === id) ?? null)
        }
      )

    },
    update: async (_: string, post: IContentBase) => {
      return await new Promise((resolve, _) => {
          resolve(post)
        }
      )
    },
    delete: (_: string) => {
      return new Promise((resolve, _) => {
          resolve()
        }
      )
    }
  }
}