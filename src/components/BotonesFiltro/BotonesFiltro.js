import Button from "react-bootstrap/Button";

const mascotData = [
  {
    id: 1,
    idRefugio: 123,
    nombre: "Luna",
    especie: "perro",
    raza: "Mestiza",
    edad: 2,
    tamaño: "Mediano",
    vacunado: true,
    descripcion:
      "Luna es una perrita juguetona y cariñosa. Le encanta jugar a la pelota y salir a pasear. Se lleva bien con otros perros y niños.",
    foto: "images/luna.jpg",
    estado: "disponible",
    fechaIngreso: "2024-05-15",
  },
  {
    id: 2,
    idRefugio: 123,
    nombre: "Toby",
    especie: "gato",
    raza: "Siamés",
    edad: 1,
    tamaño: "Pequeño",
    vacunado: true,
    descripcion:
      "Toby es un gatito muy mimoso y ronroneante. Le encanta acurrucarse en tu regazo y recibir caricias. Es un poco tímido al principio, pero se adapta rápido a nuevos entornos.",
    foto: "images/toby.jpg",
    estado: "disponible",
    fechaIngreso: "2024-06-02",
  },
  {
    id: 3,
    idRefugio: 124,
    nombre: "Max",
    especie: "perro",
    raza: "Golden Retriever",
    edad: 4,
    tamaño: "Grande",
    vacunado: true,
    descripcion:
      "Max es un perro grande y juguetón. Le encanta jugar a buscar y nadar. Es muy protector con su familia y se lleva bien con los niños.",
    foto: "images/max.jpg",
    estado: "en proceso de adopción",
    fechaIngreso: "2024-03-10",
  },
  {
    id: 4,
    idRefugio: 124,
    nombre: "Bella",
    especie: "gato",
    raza: "Persa",
    edad: 3,
    tamaño: "Mediano",
    vacunado: true,
    descripcion:
      "Bella es una gata muy independiente y tranquila. Le gusta pasar tiempo sola, pero también disfruta de las caricias. Es un poco reservada al principio, pero con el tiempo se vuelve muy cariñosa.",
    foto: "images/bella.jpg",
    estado: "disponible",
    fechaIngreso: "2024-04-25",
  },
  {
    id: 5,
    idRefugio: 125,
    nombre: "Rocky",
    especie: "perro",
    raza: "Pitbull",
    edad: 5,
    tamaño: "Grande",
    vacunado: true,
    descripcion:
      "Rocky es un perro muy leal y protector. Le encanta estar con su familia y salir a caminar. Es un poco desconfiado con los extraños, pero con el tiempo se socializa.",
    foto: "images/rocky.jpg",
    estado: "disponible",
    fechaIngreso: "2024-02-08",
  },
  {
    id: 6,
    idRefugio: 125,
    nombre: "Kitty",
    especie: "gato",
    raza: "Siamés",
    edad: 2,
    tamaño: "Pequeño",
    vacunado: true,
    descripcion:
      "Kitty es una gatita muy juguetona y traviesa. Le encanta jugar con pelotas y escalar muebles. Es muy cariñosa y le encanta estar en tu regazo.",
    foto: "images/kitty.jpg",
    estado: "en proceso de adopción",
    fechaIngreso: "2024-05-18",
  },
];

export default function BotonesFiltro({
  mascotaItems,
  filtroMascotas,
  setItem,
}) {
  return (
    <div className="d-flex justify-content-center mb-5">
      {mascotaItems.map((val) => (
        <Button
          className="p-1 px-2 mx-5"
          variant="info"
          onClick={() => filtroMascotas(val)}
        >
          {val.toUpperCase()}
        </Button>
      ))}
      <Button
        className="p-1 px-2 mx-5"
        variant="dark"
        onClick={() => setItem(mascotData)}
      >
        TODOS
      </Button>
    </div>
  );
}
