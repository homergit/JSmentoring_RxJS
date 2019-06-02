import { fromEvent, Subject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { loadPosts, filterData } from "./services/utils";
import { map, debounceTime } from "rxjs/operators";

const postsList = document.getElementById('posts-list');
const loadButton = document.getElementById('load-button');
const filterInput = document.getElementById('posts-input');

const subject = new Subject();

fromEvent(loadButton, 'click').pipe(
    switchMap(() => loadPosts())
).subscribe((data) => subject.next(data));

fromEvent(filterInput, 'input').pipe(
    map((event) => event.srcElement.value),
    debounceTime(1000)
).subscribe((query) => {
    filterData(query, postsList)
});

subject.subscribe(data => postsList.innerHTML = data);
