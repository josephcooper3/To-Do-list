import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      toDos: ["Unload dishwasher", "Load laundry", "Put away shopping"],
      newToDo: "",
    },
    methods: {
      addItem: function () {
        this.toDos.push(this.newToDo);
        this.newToDo = "";
      }
    },
  });
});