const postsUrl = import.meta.env.VITE_BASE_URL + '/posts'

export interface IPostsDummy {
    posts: IPosts[];
    skip: number;
    total: number;
    limit: number
}

export interface IPosts {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number

}

const getPosts = async(): Promise<IPostsDummy[]> => {
    return await fetch(postsUrl)
        .then(value => value.json() )

}
export {getPosts}