import { CRUD } from '@mark.walker/v-cms/core/types'
import {IMyContentShape} from '../types.ts'


const DB: IMyContentShape[] = [
  {
    id: '1',
    content: '<h1>Hello, world!</h1>',
    someOtherField: 'someOtherField'
  }
]


function myCrudActions(): CRUD<IMyContentShape> {
  return {
    create: async (post: IMyContentShape) => {
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
    update: async (_: string, post: IMyContentShape) => {
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

export default { myCrudActions }