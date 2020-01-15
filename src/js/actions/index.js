import { ADD_ARTICLE } from "../constants/action-types";

console.log('action1 ');


export function addArticle(payload) {
    console.log('action2 ');
    return { type: ADD_ARTICLE, payload };
}