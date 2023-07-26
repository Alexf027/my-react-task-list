import "../App.css"

export function Aboutpage() {
    return (
      <div className="aboutus">
          <h1 className="about">Sobre nosotros</h1>
          <p>Nuestra aplicación fue creada con el objetivo de ayudarte a organizar tus tareas diarias de una manera simple y efectiva.
          Ya sea que necesite realizar un seguimiento de sus tareas pendientes en el trabajo, la escuela o sus actividades diarias, nuestra Lista de tareas pendientes está aquí para facilitarle la administración de sus actividades.</p>
          <h2>Funcionalidades</h2>
      <ul>
        <li><i class="fa-solid fa-circle-check"></i>
        Crear nuevas tareas y asignarles una descripción.</li>
        <li><i class="fa-solid fa-circle-check"></i>
        Marcar las tareas como completadas una vez que las hayas finalizado.</li>
        <li><i class="fa-solid fa-circle-check"></i>
        Editar o eliminar tareas existentes.</li>
        <li><i class="fa-solid fa-circle-check"></i>
        Visualizar una lista de tareas pendientes para mantener un seguimiento claro.</li>
      </ul>
      <h2>Tecnologías utilizadas</h2>
      <p>
        Nuestra aplicación se construyó utilizando las siguientes tecnologías:
      </p>
      <ul>
        <li><i class="fa-solid fa-circle-check"></i>
        React: Un framework de JavaScript para construir interfaces de usuario interactivas.</li>
        <li><i class="fa-solid fa-circle-check"></i>
        React hook-form: es una biblioteca de gestión de formularios que facilitan la gestión.</li>
        <li><i class="fa-solid fa-circle-check"></i>
        React Router: Una librería de enrutamiento para manejar las diferentes páginas de la aplicación.</li>
        <li><i class="fa-solid fa-circle-check"></i>
        Chakra UI: Una biblioteca de componentes y estilos para diseñar una interfaz atractiva y receptiva.</li>
        <li><i class="fa-solid fa-circle-check"></i>
        LocalStorage: Utilizamos el almacenamiento local del navegador para guardar las tareas de los usuarios.</li>
      </ul>
      <p className="lest">
        ¡Esperamos que disfrutes utilizando nuestra Lista de Tareas y que te ayude a mantenerte organizado y productivo en tus actividades diarias!✅🎯
      </p>
      </div>
      
    )
  }