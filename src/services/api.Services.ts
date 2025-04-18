
export const baseUrl = 'https://jsonplaceholder.typicode.com'

// const userService = {
//     getAllUsers: async (): Promise<IUser[]> => {
//         const users = await fetch (baseUrl + '/users')
//             .then(value => value.json())
//         return users
//     }
// }
// const postService = {}
// const commentService = {}

export const getAll = async<T, > (endpoint: string) =>{
    const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response: Response) => response.json())
    return responseResult as T;

}
// const allUser = getAll<IUser[]>('/users')