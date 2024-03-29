import axios from "axios";

export const baseUrl = 'https://swapi.dev/api/'
export const people = 'people'
export const SWAPI_RARAM_SEARCH = '/?search='

export const API_SEARCH = baseUrl + people + SWAPI_RARAM_SEARCH

const api = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const Api = {
    getPeople: (page) => api.get(`people/?page=${page}`)
};

const GIUDE_ROOT = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters'
export const GUIDE_IMG = '.jpg'

export const URL_IMG = GIUDE_ROOT + GUIDE_PEOPLE