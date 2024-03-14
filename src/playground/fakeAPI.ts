import {CRUD, IContentBase} from '@/core/types'


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

export const readDetail = async (id: string) => {
    return await new Promise((resolve, _) => {
            resolve(DB.find(post => post.id === id) ?? null)
        }
    )

}

export const update = async (_: string, post: Partial<IContentBase>) => {
    return await new Promise((resolve, _) => {
            resolve(post as IContentBase)
        }
    )
};

export function getActions(): CRUD<IContentBase, IContentBase, IContentBase, IContentBase> {
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
        update: async (_: string, post: Partial<IContentBase>) => {
            return await new Promise((resolve, _) => {
                    resolve(post as IContentBase)
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