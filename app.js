const cargarPeliculas = async () => {

    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=99e72897d385b0031be579f9d1a4fae3&language=es-MX');

        console.log(respuesta);

        // Si la respuesta es correcta
        if(respuesta.status === 200) {
            const datos = await respuesta.json();

            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += `
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal');

        } else if (respuesta.status === 404) {
            console.log('La película que buscas no existe');

        } else {
            console.log('Hubo un error y no sabemos que pasó');
        }


    } catch (error) {
        console.log(error);
    }


}

cargarPeliculas();