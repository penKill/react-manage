import {post} from '../util/request'

export const login = (name: string, password: string) => {
    console.log(name, password)
    post('/login', {name: name, password: password})
    // )
}
