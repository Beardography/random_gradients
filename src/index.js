const red1 = Math.ceil(Math.random() * 256).toString();
const red2 = Math.ceil(Math.random() * 256).toString();
const red3 = Math.ceil(Math.random() * 256).toString();
const red4 = Math.ceil(Math.random() * 256).toString();

const green1 = Math.ceil(Math.random() * 256).toString();
const green2 = Math.ceil(Math.random() * 256).toString();
const green3 = Math.ceil(Math.random() * 256).toString();
const green4 = Math.ceil(Math.random() * 256).toString();

const blue1 = Math.ceil(Math.random() * 256).toString();
const blue2 = Math.ceil(Math.random() * 256).toString();
const blue3 = Math.ceil(Math.random() * 256).toString();
const blue4 = Math.ceil(Math.random() * 256).toString();

const opacity1 = Math.random();
const opacity2 = Math.random();
const opacity3 = Math.random();
const opacity4 = Math.random();

const angle1 = Math.ceil(Math.random() * 360).toString();
const angle2 = Math.ceil(Math.random() * 360).toString();

const color1 = `(${red1}, ${green1}, ${blue1}, ${opacity1})`;
const color2 = `(${red2}, ${green2}, ${blue2}, ${opacity2})`;
const color3 = `(${red3}, ${green3}, ${blue3}, ${opacity3})`;
const color4 = `(${red4}, ${green4}, ${blue4}, ${opacity4})`;

const colorValue1 = `rgba${color1}`;
const colorValue2 = `rgba${color2}`;
const colorValue3 = `rgba${color3}`;
const colorValue4 = `rgba${color4}`;

const gradient1 = `linear-gradient(${angle1}deg, ${colorValue1}, ${colorValue2})`;
const gradient2 = `linear-gradient(${angle2}deg, ${colorValue3}, ${colorValue4})`;

document.getElementById('gradient1').style.background = gradient1;
document.getElementById('gradient2').style.background = gradient2;