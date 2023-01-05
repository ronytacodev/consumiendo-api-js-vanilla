const cargarPeliculas = async () => {

    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=99e72897d385b0031be579f9d1a4fae3&language=es-MX');

        console.log(respuesta);

        // Si la respuesta es correcta
        if(respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos.title);

        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal');

        }else if (respuesta.status === 404) {
            console.log('La película que buscas no existe');
        }


    } catch (error) {
        console.log(error);
    }


}

cargarPeliculas();