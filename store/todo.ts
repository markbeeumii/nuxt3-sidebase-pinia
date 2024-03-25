import { defineStore } from 'pinia';
import { useUserStore } from './user';
type Todo = {
  _id: number;
  content: string;
  isFinished: boolean;
  isEditing: boolean;
  userId?: number;
};

interface TsK {
  id: number;
  name: string;
}

export type RootState = {
  tasks: Todo[];
  lastId: number;
};

export const useTodoStore = defineStore('todoStore', {
  state: (): RootState => ({
    tasks: [],
    lastId: 0,
  }),

  getters: {
    completedTasks(): Todo[] {
      return this.tasks.filter(task => task.isFinished);
    },
    leftTasks(): Todo[] {
      return this.tasks.filter(task => !task.isFinished);
    },
  },

  actions: {
    getTasks() {
      const user = useUserStore();
      this.tasks = this.tasks.filter(task => task.userId === user.id);
    },
    addTask(content: string) {
      this.tasks.push({
        _id: ++this.lastId,
        content: content,
        isFinished: false,
        isEditing: false,
        userId: 0,
      });
    },
    removeTask(id: number): void {
      this.tasks = this.tasks.filter(t => t._id !== id);
    },

    update(tasks: Todo[]) {
      this.tasks = tasks;
      //this.saveToLocalStorage();
    },
  },
});
