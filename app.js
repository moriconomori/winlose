var app = new Vue({
  el: "#app",
  data: {
    date: "yyyy/mm/dd",
    matches: 0,
    victories: 0,
    defeats: 0
  },
  methods: {
    addWin: function (event) {
      this.matches += 1;
      this.victories += 1;
    },
    addLose: function (event) {
      this.matches += 1;
      this.defeats += 1;
    }
  },
  mounted() {
    this.date = moment().format("YYYY/MM/DD");
  }
});
