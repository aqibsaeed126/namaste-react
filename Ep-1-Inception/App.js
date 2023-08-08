const heading1 = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello World from React! I am H1 Tag"
);

const heading2 = React.createElement(
  "h2",
  { id: "heading2", abc: "xyz" },
  "Small Hello World from React! I am H1 Tag"
);
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

console.log("Hello" + parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
