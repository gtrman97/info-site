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

const navbar = (
    <nav>
        <h1>Computer Detective</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"));

// let root = document.getElementById("root"), h1 = document.createElement("h1");
// h1.textContent("Imperative");
// h1.className = "header";
// root.append(h1);
