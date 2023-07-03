import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Сontacts from "./contacts/Сontacts";
import Footer from "./footer/Footer";

function App() {
    console.log ('fix 1')
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Сontacts/>
            <Footer/>
        </div>
    );
}

export default App;
