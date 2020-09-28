interface forEachCallbackReturn {
    add?: boolean;
    remove?: boolean;
    stop?: boolean;
}

type forEachCallback<T> = (node: T) => forEachCallbackReturn;

export default class LinkedList<T> {
    constructor();
    readonly length: number;
    push(node: T, top: boolean): void;
    pop(remove: boolean, top: boolean): T;
    clean(): void;
    forEach(fun: forEachCallback<T>, topToBottom: boolean): void;
}