/**
 * Create a Backpack object.
 */

const mobilePhone = {
  brand: "Apple",
  model: "14 Pro",
  color: "Black",
  size: {
    width: 2.81,
    height: 5.81,
    depth: 0.31,
  },
  descript: function () {
    console.log(
      `Hello I'm a Iphon ${this.model} from ${this.brand} have color is ${this.color} and size of me is ${mobilePhone.size}`
    );
  },
  changeModel: function (newModel) {
    this.model = newModel;
  },
};

mobilePhone.descript();

mobilePhone.changeModel("14Pro Max");

mobilePhone.descript();
