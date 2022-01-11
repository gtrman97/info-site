function MainContent(){
    return (
    <h1>
        I'm learning React!
    </h1>
    )
}

let Section = () => (
    <p>It is fun!</p>
)

ReactDOM.render(
<div>
<MainContent />
<Section />
</div>, document.getElementById("root"));

// let root = document.getElementById("root"), h1 = document.createElement("h1");
// h1.textContent("Imperative");
// h1.className = "header";
// root.append(h1);
