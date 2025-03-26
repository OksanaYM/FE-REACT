export interface IComments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const commentsUrl = import.meta.env.VITE_API_BASE_URL + '/comments'

export const getComments = async(): Promise<IComments[]> =>{
    return await fetch(commentsUrl)
        .then(value => value.json())
}