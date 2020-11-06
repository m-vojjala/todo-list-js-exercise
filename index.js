const newTask = function(title,desc) {
  const task = {
    title:title,
    description:desc,
    markCompleted:function() {
      this.complete = true;
    },
    logTask:function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};

const task1 = newTask("clean cat litter","take all the pooop");
const task2 = newTask("Do laundy");
const tasks = [task1,task2];
console.log(tasks);

task1.logTask();
task1.markCompleted();
task1.logTask();
