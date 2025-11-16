
function CabeceraCV() {
    const data = {
        nombre: "Liliana Sofia Panesso Mendez",
        rol: "Desarrolladora Front-End Jr.",
        telefono: "3007649182",
        corre: "panessoliliana785@gmail.com",
        ciudad: "Medellin, Colombia"
    };
    
    return(
        <header> 
            <h1>{data.nombre}</h1>
            <h2>{data.rol}</h2>

            <p>{data.telefono}</p>
            <p>{data.correo}</p>
            <p>{data.ciudad}</p>
        </header>
    );
}
export default CabeceraCV