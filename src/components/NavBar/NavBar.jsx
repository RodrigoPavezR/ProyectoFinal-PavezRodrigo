import { Link } from "react-router-dom";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

Link

export const NavBar = () => {
  return (
  
  <nav className="d-flex justify-content-around p-4">
    <a href="/"> 
        <img src="/img/logo.png" alt="" style={{width: "150px"}} />
        </a>
        <div>
        <Link to="/">
        <button className="btn btn-success mx-2">Home</button>
        </Link>
        
        <button className="btn btn-success mx-2" onClick={() => getProductsDB("Sillas")}>Sillas</button>
       
        <button className="btn btn-success mx-2">Otros Productos</button>
        <Link to="/nosotros">
        <button className="btn btn-success mx-2">Nosotros</button>
        </Link>
      </div>
    
  
    
    </nav>
  );
};
