import Tablica from './Tablica';
import {Link} from 'react-router-dom';
import {Component} from 'react';

export class Naslovna extends Component{render() {
    let iznad = {
        poz: "1.",
        ime: "Dinamo",
        utakmice: "36",
        gr: "+53",
        bodovi: "81"
    }

    let hajduk = {
        poz: "2.",
        ime: "Hajduk",
        utakmice: "36",
        gr: "+24",
        bodovi: "71"
    }

    let ispod = {
        poz: "3.",
        ime: "Osijek",
        utakmice: "36",
        gr: "+5",
        bodovi: "50"
    }

   { return (
      <div className="App">
        HNK (Hrvatski Nogometni Klub) Hajduk Split je nogometni klub iz Splita, natječe se u <strong>Hrvatskoj Nogometnoj Ligi</strong> i u sezoni 2022./23. završio je na 2. mjestu sa 71 bodom i osvojenim Hrvatskim Nogometnim Kupom.
        <br/><br/><br/>
        <Tablica iznad={iznad} hajduk={hajduk} ispod={ispod}/>
        <br/><br/><br/>
        <Link to='/povijest'>Ako želite saznati više o povijesti kluba, kliknite ovdje.</Link>
      </div>
    );
}
  }
}
  export default Naslovna;