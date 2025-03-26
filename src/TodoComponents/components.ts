const userUrl = import.meta.env.VITE_USER_BASE_URL + '/todos'

const getUsers = async () : Promise<IUser[]> => {

    return await fetch(userUrl)
        .then(value => value.json())

}
export {getUsers}


export interface IUser {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

