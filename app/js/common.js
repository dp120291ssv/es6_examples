// Class

class Task {
    // constructor() {
    //     this.title = 'ES6';
    // }
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        this.title = title;
        this._isCompleted = isCompleted;
        Task.counter += 1;
    }

    static getDefaultTitle() {
        return 'New title';
    }

    completed(){
        this._isCompleted = true;
    }

    get isCompleted(){
        return this._isCompleted === true ? 'Good' : 'Bad';
    }
}

//static property
Task.counter = 0;

let task = new Task('0', false);
let task1 = new Task('1', false);
let task2 = new Task('2', false);
let task3 = new Task();

// task1.completed();
console.log(task.isCompleted, task._isCompleted)
console.log(task1)
console.log(task2)
console.log(task3)
console.log(Task.counter)