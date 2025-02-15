import "./footer.css";

const coloresVivos = {
  color: "green",
  backgroundColor: "yellow",
  fontSize: "30px",
  fontFamily: "Arial",
};

const coloresNeutros = {
  color: "black",
  backgroundColor: "white",
  fontSize: "18px",
  fontFamily: "Times New Roman",
};




          //        { year, cohorte }
export const Footer = ( { year , cohorte:ch, inLove }  ) => {
  return (
    <div>
      <p className="textFooter">Footer de mi aplicación</p>
      <p style = { {color: "yellow", fontFamily: "Arial" } } >Año {year}, Cohorte {ch}</p>
      <p style = { inLove ? coloresVivos : coloresNeutros  }  >Feliz 14 de febrero, también el 15, 16 y todos días</p>
      <p style = { {color: "red", fontFamily: "Verdana", fontSize: "30px" } }> Frase para enamorar </p>   
    </div>
  );
};

/* codigo Kati:
<Footer year="2025" cohorte={50} inLove={true} valentin={false} />

<p style={valentin ? si : no}>¿Quieres ser mi Valentin?</p>

const si = {

  color: "red",

  fontFamily: "Arial",

};

const no = {

  color: "gray",

};

export const Footer = ({ year, cohorte: ch, inLove, valentin })

*/