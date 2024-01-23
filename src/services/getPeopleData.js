import { Api, GUIDE_IMG, URL_IMG, baseUrl, people } from "../api/Api"

const getId = (url, category) => {
    const id = url
        .replace(baseUrl + category, '')
        .replace(/\//g, '')
    return id
}

export const getPeopleId = url => getId(url, people)

export const getPeopleImage = id => `${URL_IMG}/${id + GUIDE_IMG}`