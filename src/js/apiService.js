import { error} from '@pnotify/core';
import './pnotify';


const API_KEY = '19166127-4697fad3b0479d24e8c47b2b4';
const BASE_URL = 'https://pixabay.com/api/';

export default class BaseApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perpage = 12;
    }

    async getQuery() {
        const searchParams = new URLSearchParams({
            key: API_KEY,
            q: this.searchQuery,
            image_type: "photo",
            orientation: "horizontal",
            page: this.page,
            per_page: this.perpage,

        })
        const url = `${BASE_URL}?${searchParams}`;

        return fetch(url).then(res => res.json()).then(data => {
            this.incrementPage();
            return data.hits
        }).catch(error => { console.log(this.pushError(error)); this.pushError(error) })
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    pushError(err) {
        error({
            text: `${err}`,
            type: "error"
        });

        return err;
    }

    get inputQuery() {
        return this.searchQuery;
    }

    set inputQuery(newQuery) {
        this.searchQuery = newQuery;
    }
}