let katy = "Katy Perry";
let brad = "Brad Pitt";
let tom = "Tom Cruise";
let lady = "Lady Gaga";
let bruno = "Bruno Mars";
let jen = "Jennifer Aniston";
let alicia = "Alicia Keys";
let emma = "Emma Stone";
const element = (
  <ul style={{ color: "blue", fontSize: "20px" }}>
    <li>{katy}</li>
    <li>{brad}</li>
    <li>{tom}</li>
    <li>{lady}</li>
    <li>{bruno}</li>
    <li>{jen}</li>
    <li>{alicia}</li>
    <li>{emma}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
