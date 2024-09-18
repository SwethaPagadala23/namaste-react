const parent = React.createElement("div",
    {id: "parent"},[
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"hi im react1"),
        React.createElement("h1",{},"hi im react2")
    ]),
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"hi im react3"),
        React.createElement("h1",{},"hi im react4")]
    )
]
)

const heading = React.createElement("h1",{className:"heading"},"Hello world")
console.log(heading)  
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)