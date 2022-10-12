import {
  action,
  computed,
  makeAutoObservable,
  observable,
  autorun,
} from 'mobx';
import { nanoid } from 'nanoid';

class TodoStore {
  list = [];
  constructor() {
    makeAutoObservable(this, {
      total: computed,
      unComplete: computed,
      list: observable,
      addItem: action,
      toggleCompleted: action,
      toggleDel: action,
    });
  }

  get total() {
    return this.list.length;
  }

  get unComplete() {
    return this.list.filter((item) => !item.completed).length;
  }

  addItem(value) {
    this.list = [...this.list, { id: nanoid(), value, completed: false }];
  }

  toggleCompleted(id) {
    const current = this.list.filter((item) => item.id === id)[0];
    current.completed = !current.completed;
  }

  toggleDel(id) {
    const idx = this.list.findIndex((item) => item.id === id);
    this.list.splice(idx, 1);
  }
}

const todoStore = new TodoStore();

autorun(() => {
  console.log('todoStore total:', todoStore.total);
});

export default todoStore;
