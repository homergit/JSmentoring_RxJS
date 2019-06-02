import { HttpService as httpService } from "./http.service";
import { map } from "rxjs/operators";

export function loadPosts() {
    return httpService.getData('https://jsonplaceholder.typicode.com/posts').pipe(
        map((data) => showData(data))
    );
}

export function filterData(query, parentElem) {
    parentElem.innerHTML = '';
    httpService.getData('https://jsonplaceholder.typicode.com/posts').pipe(
        map((data) => data.filter(
            data => data.title.includes(query)
        )),
        map((data) => showData(data))
    ).subscribe((markUp) => parentElem.innerHTML = markUp);
}


function showData(data) {
    let list = '';
    data.forEach(dataItem => {
        list += `<div>
                    <div>${dataItem.id} / User id is ${dataItem.userId}</div>
                    <h3>Title: ${dataItem.title}</h3>
                    <p>Decsription: ${dataItem.body}</p>
                    <hr>
                </div>`;
    });
    return list;
}
