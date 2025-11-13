import { useEffect, useRef, useState } from "react";
import burger from "./assets/burger-de-boeuf.png";
import setting from "./assets/mobile.png";
import fastfood from "./assets/fastfood.png";
import burger1 from "./assets/burger1.jpg";
import burger2 from "./assets/burger2.jpg";
import burger3 from "./assets/burger3.jpg";
import burger4 from "./assets/burger4.jpg";
import taco1 from "./assets/taco1.jpg";
import taco2 from "./assets/taco2.jpg";
import taco3 from "./assets/taco3.jpg";
import boi1 from "./assets/boi1.webp";
import boi2 from "./assets/boi2.webp";
import boi3 from "./assets/boi3.webp";
import boi4 from "./assets/boi4.webp";
import frit1 from "./assets/frit1.webp";
import frit2 from "./assets/frit2.jpg";
import frit3 from "./assets/frit3.jpg";
import youtube from "./assets/youf.webp";
import facebook from "./assets/facef.webp";
import instagram from "./assets/instaf.webp";
import corpo from "./assets/corpo.png";
import pizza from "./assets/pizza.png";


function Theend (){

    const [ show , setshow ] = useState(false);
    const [ stuck , setstuck ] = useState(false);
    const [ stuck2 , setstuck2 ] = useState(false);
    const [ stuck3 , setstuck3 ] = useState(false);
    const [ stuck4 , setstuck4 ] = useState(false);
    const [ display , setdisplay ] = useState([burger1 , burger2 , burger3 , burger4]);
    const [ name , setname ] = useState(["El Pequeño" , "El Classico" , "El Pollo" , "La Cebolla"])
    const [ price , setprice ] = useState(["24 DA" , "30 DA" , "18 DA" , "42 DA"]);
    const [ display2 , setdisplay2 ] = useState("............................................................................ ");
    const [ display3 , setdisplay3 ] = useState(".");
    const [ margin , setmargin ] = useState("");
    const [ active , setactive ] = useState("Notification 🔔");
    const [ show5 , setshow5 ] = useState(false);
    const [ animation , setanimation ] = useState(false);
    const [ fade, setFade ] = useState(true); 

    const afishi = () => {
        setshow(!show);
        setanimation(false)
    }
    const show1 = () => {
        setFade(false);
        setTimeout(() => setFade(true), 50);

        setstuck(true)
        setstuck2(false);
        setstuck3(false);
        setstuck4(false);
        setdisplay([burger1 , burger2 , burger3 , burger4]);
        setname(["El Pequeño" , "El Classico" , "El Pollo" , "La Cebolla"]);
        setprice(["24 DA" , "30 DA" , "18 DA" , "42 DA"]);
        setdisplay2("............................................................................");
        setmargin(""); 
    }
    const show2 = () => {
        setFade(false);
        setTimeout(() => setFade(true), 50);

        setstuck(false)
        setstuck2(true);
        setstuck3(false);
        setstuck4(false);
        setdisplay([taco1 , taco2 , taco3 ]);
        setname(["Pollo" , "Carne" , "Mixado" ]);
        setprice(["600 DA" , "650 DA" , "700 DA" ]);
        setdisplay2("");
        setdisplay3("");
        setmargin("-15px"); 
    }
    const show3 = () => {
        setFade(false);
        setTimeout(() => setFade(true), 50);

        setstuck(false)
        setstuck2(false);
        setstuck3(true);
        setstuck4(false);
        setdisplay([frit1 , frit2 , frit3 ]);
        setname(["Frites" , "Frites Fr" , "Tenders-200grs"]);
        setprice(["150 DA" , "250 DA" , "450 DA"]);
        setdisplay2("");
        setdisplay3("");
        setmargin(""); 
    }
    const show4 = () => {
        setFade(false);
        setTimeout(() => setFade(true), 50);

        setstuck(false)
        setstuck2(false);
        setstuck3(false);
        setstuck4(true);
        setdisplay([boi1 , boi2 , boi3 , boi4]);
        setname(["Eau Minérale" , "Soda - 24 cl" , "Soda - 33 cl" , "LJus Maison"]);
        setprice(["50 DA" , "10 DA" , "15 DA" , "350 DA"]);
        setdisplay2("............................................................................");
        setdisplay3(".");
        setmargin(""); 
    }
    const change = () => {
        if(active == "Notification 🔕"){
            setactive("Notification 🔔");
        }else{
            setactive("Notification 🔕");
        }
        setanimation(!animation);
    }
    const timeref = useRef(null);

    const start = () => {
        setshow5(true);
        if(timeref.current) clearTimeout(timeref.current);
        timeref.current = setTimeout(() => {
            setshow5(false);
            timeref.current = null;
        }, 4000);
    }
    const scrol = () => {
        window.scrollBy({
            behavior : "smooth",
            top : 500 ,
        });
    }
    const scrol2 = () => {
        window.scrollBy({
            behavior : "smooth",
            top : -500 ,
        });
    }
    useEffect(() =>{
        show1()
    } ,[])


    return(
        <>
            <div id="nav">
                <ul>
                    <li onClick={scrol2}>Home</li>
                    <li onClick={scrol}>About us</li>
                    <img id="burger" src={burger} />
                    <img onClick={afishi }  id="setting" src={setting} />
                </ul>
            </div>
            { show && <div id="l7awi1" className={animation ? "animation" : ""}>
                <p > info </p>  <hr />    
                <p onClick={change}> {active} </p> <hr /> 
                <p onClick={start}> Languge </p>  
            </div> }
            { show5 && <p id="worning">This option is not availebel for now</p>}
            

            <img id="fastfood" src={fastfood} />
            <h1 id="text1">Fast</h1>
            <h1 id="text2">Food</h1>

            <button onClick={show1} className={ stuck ? "bgcolor" : ""} id="brbut">Burgers</button>
            <button onClick={show2} className={ stuck2 ? "bgcolor" : ""} id="pzbut">Tacos</button>
            <button onClick={show3} className={ stuck3 ? "bgcolor" : ""} id="tcbut">Frites</button>
            <button onClick={show4} className={ stuck4 ? "bgcolor" : ""} id="bobut">Boissons</button>

            <img id="burger1" src={display[0]} style={{ marginLeft : margin }} className={fade ? "fade-in" : ""} /> 
            <h1 id="elp"><span> {name[0]} </span> <span id="kht1">.............................................................................</span> <span id="prix1" > {price[0]} </span>.</h1>

            <img id="burger2" src={display[1]} style={{ marginLeft : margin }} className={fade ? "fade-in" : ""} />  
            <h1 id="elp2"><span> {name[1]} </span> <span id="kht2">............................................................................ </span><span >{price[1]}</span>.</h1>

            <img id="burger3" src={display[2]} style={{ marginLeft : margin }} className={fade ? "fade-in" : ""} /> 
            <h1 id="elp3"><span> {name[2]} </span> <span id="kht3">..................................................................................</span> <span >{price[2]}</span>.</h1>

            <img id="burger4" src={display[3]} style={{ marginLeft : margin }} className={fade ? "fade-in" : ""} /> 
            <h1 id="elp4"><span> {name[3]} </span> <span id="kht4">{display2}</span> <span >{price[3]}</span> {display3}</h1>

            <footer id="footer">
                <p id="followus">Follow us on </p>
                <a href="https://www.youtube.com/"> <img id="you" src={youtube} /> </a>
                <a href="https://www.facebook.com/"> <img id="face" src={facebook} /> </a>
                <a href="https://www.instagram.com/"> <img id="insta" src={instagram} /> </a>
                <h1 id="corpo">Corpo.</h1>
                <p id="textt">i will builde what ever you want.</p>
                <hr id="lkht"/>
                <img id="tswira" src={corpo}  />
                <img id="piz" src={pizza} />
                <img id="bur" src={burger} />
            </footer>

        </>
    );
}

export default Theend;

