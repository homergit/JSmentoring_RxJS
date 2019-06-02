import { fromPromise } from "rxjs/internal-compatibility";
import { map } from "rxjs/operators";
import { Model } from "../models/model";

export class HttpService {
    static getData(url) {
        const promise = fetch(url).then(response => response.json());

        return fromPromise(promise)
            .pipe(
                map((data) => data.map(
                    data => new Model(
                        data.userId,
                        data.id,
                        data.title,
                        data.body
                )))
            );
    }
}
