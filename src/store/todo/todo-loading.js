import { BehaviorSubject } from "rxjs";

const todoListLoad = new BehaviorSubject(false);
const todoListError = new BehaviorSubject(null);

export const todoListLoad$ = todoListLoad.asObservable();
export const todoListError$ = todoListError.asObservable();

export const setTodoListLoad = (status) => todoListLoad.next(status);
export const setTodoListError = (status) => todoListError.next(status);
