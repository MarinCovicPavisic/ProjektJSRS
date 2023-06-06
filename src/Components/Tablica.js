function Tablica({iznad, hajduk, ispod}) {
    return (
      <div className="App">
        <table border='1px'>
            <tr>
                <td>Poz</td>
                <td>Ime kluba</td>
                <td>OU</td>
                <td>GR</td>
                <td>Bod</td>
            </tr>
            <tr>
                <td>{iznad.poz}</td>
                <td>{iznad.ime}</td>
                <td>{iznad.utakmice}</td>
                <td>{iznad.gr}</td>
                <td>{iznad.bodovi}</td>
            </tr>
            <tr>
                <td>{hajduk.poz}</td>
                <td>{hajduk.ime}</td>
                <td>{hajduk.utakmice}</td>
                <td>{hajduk.gr}</td>
                <td>{hajduk.bodovi}</td>
            </tr>
            <tr>
                <td>{ispod.poz}</td>
                <td>{ispod.ime}</td>
                <td>{ispod.utakmice}</td>
                <td>{ispod.gr}</td>
                <td>{ispod.bodovi}</td>
            </tr>
        </table>
      </div>
    );
  }
  
  export default Tablica;