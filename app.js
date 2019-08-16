var app = new Vue({
  el: "#app",
  data: {
    date: "yyyy/mm/dd",
    matches: 0,
    victories: 0,
    defeats: 0,
    fontSize: 2.0
  },
  methods: {
    addWin: function (event) {
      this.matches += 1;
      this.victories += 1;
    },
    addLose: function (event) {
      this.matches += 1;
      this.defeats += 1;
    },
    minusWin: function (event) {
      if (this.victories > 0) {
        this.matches -= 1;
        this.victories -= 1;
      }
    },
    minusLose: function (event) {
      if (this.defeats > 0) {
        this.matches -= 1;
        this.defeats -= 1;
      }
    },
    fontLarge: function (event) {
      this.fontSize += 0.1;
    },
    fontSmall: function (event) {
      if (this.fontSize > 0.5) {
        this.fontSize -= 0.1;
      }
    }
  },
  mounted() {
    this.date = moment().format("YYYY/MM/DD");
  }
});
