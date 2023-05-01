let katy = "Katy Perry";
let brad = "Brad Pitt";
let tom = "Tom Cruise";
let lady = "Lady Gaga";
let bruno = "Bruno Mars";
let jen = "Jennifer Aniston";
let alicia = "Alicia Keys";
let emma = "Emma Stone";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "20px"
  }
}, /*#__PURE__*/React.createElement("li", null, katy), /*#__PURE__*/React.createElement("li", null, brad), /*#__PURE__*/React.createElement("li", null, tom), /*#__PURE__*/React.createElement("li", null, lady), /*#__PURE__*/React.createElement("li", null, bruno), /*#__PURE__*/React.createElement("li", null, jen), /*#__PURE__*/React.createElement("li", null, alicia), /*#__PURE__*/React.createElement("li", null, emma));
ReactDOM.render(element, document.getElementById("content"));
