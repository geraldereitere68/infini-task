/* 
   Filename: SophisticatedCode.js
   Description: This code demonstrates a complex and sophisticated JavaScript implementation of a task scheduler using priority queues.
*/

// Define a class for task
class Task {
  constructor(id, priority, description) {
    this.id = id;
    this.priority = priority;
    this.description = description;
  }
}

// Define a PriorityQueue class
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Method to add a task to the queue based on priority
  enqueue(task) {
    if (this.isEmpty()) {
      this.queue.push(task);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (task.priority < this.queue[i].priority) {
          this.queue.splice(i, 0, task);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(task);
      }
    }
  }

  // Method to remove and return the highest priority task
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Method to get the size of the queue
  size() {
    return this.queue.length;
  }
}

// Create a new PriorityQueue instance
const taskScheduler = new PriorityQueue();

// Add tasks to the scheduler
taskScheduler.enqueue(new Task(1, 2, "Task 1 - Priority 2"));
taskScheduler.enqueue(new Task(2, 1, "Task 2 - Priority 1"));
taskScheduler.enqueue(new Task(3, 4, "Task 3 - Priority 4"));
taskScheduler.enqueue(new Task(4, 3, "Task 4 - Priority 3"));

// Dequeue and print the tasks in priority order
while (!taskScheduler.isEmpty()) {
  const task = taskScheduler.dequeue();
  console.log(`Dequeued Task ${task.id} - ${task.description}`);
}