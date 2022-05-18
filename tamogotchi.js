const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,

  getStatus: function () {
    return `Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение: ${this.mood}`;
  },

  setName: function () {
    name: "Jamic";
  },

  toEat: function () {
    if (this.meal < 5) {
      this.energy += 1;
      this.mood -= 1;
      return this.getStatus();
    }
  },

  sleep: function () {
    if (this.sleep < 5) {
      this.energy += 1;
      this.meal -= 1;
    }
    return this.getStatus();
  },

  play: function () {
    if (this.mood < 5) {
      this.mood += 1;
      this.energy -= 1;
    }
    return this.getStatus;
  },

  mealMood: function () {
    if (this.meal < 3) {
      return "Я голоден";
    } else this.meal > 3;
    return "Я не голоден";
  },

  energyMood: function () {
    if (this.energy < 3) {
      return "Я хочу спать";
    } else if (this.energy > 3) {
      return "Я не хочу спать";
    }
  },

  moodMood: function () {
    if (this.mood < 3) {
      return "Мне скучно";
    } else this.mood > 3;
    return "Мне весело";
  },

  death() {
    if (this.meal <= 0)
      if (this.energy <= 0)
        if (this.mood <= 0) {
          console.log(Name + " " + "умер");
        }
  },
};

console.log(tamogotchi.toEat());
console.log(tamogotchi.toEat());
