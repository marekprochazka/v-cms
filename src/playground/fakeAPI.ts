import { CRUD, IPostBase } from '@/core/types'


const DB: IPostBase[] = [
  {
    id: '1',
    content: '<h1>Hello, world!</h1> {{ cmp }}betweeeeeen{{ cmp-with-request }}  ',
    title: 'Hello, world!',
    seo_name: 'hello-world',
    seo_description: 'Hello, world!',
    seo_keywords: 'Hello, world!',
    status: {
      identifier: 'published',
      display_name: 'Published'
    }
  },
  {
    id: '2',
    content: '<h1>Hello, world!</h1>',
    title: 'Hello, world!',
    seo_name: 'hello-world',
    seo_description: 'Hello, world!',
    seo_keywords: 'Hello, world!',
    status: {
      identifier: 'published',
      display_name: 'Published'
    }
  }
]


export function getActions(): CRUD<IPostBase> {
  return {
    create: async (post: IPostBase) => {
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
    update: async (_: string, post: IPostBase) => {
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