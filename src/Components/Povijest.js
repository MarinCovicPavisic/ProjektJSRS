import Osnivaci from '../osnivaci.jpg';
import {Link} from 'react-router-dom';

function Povijest() {
    return (
      <div className="App">
        Hajduk je osnovan u pivnici U Fleku u Pragu, a službeno u carskom uredu u Zadru 13.2.1911.
        Hajduk u svojoj bogatoj povijesti ima tri četvrtzavršnice Europskog Kupa (Liga Prvaka), osvojio je 18 naslova prvaka, 17 nacionalnih kupova te 5 superkupova.
        <br/><br/><br/>
        <img src={Osnivaci}/>
        <br/><br/><br/>
        <Link to='/'>Klikni ovdje za povratak na Naslovnicu</Link>
      </div>
    );
  }
  
  export default Povijest;