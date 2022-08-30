
const ItemList = ({ productos = [] }) => {
  productos.map((prod) => console.log(prod.id));


  return (
    <div>
      <h2>Productos</h2>
      <hr></hr>
      {productos.map((prod) => {
        return (
          <div key={prod.id}>
            <img src={prod.img}></img>
            <h4>{prod.nombre}</h4>
            <p>Precio: {prod.precio}</p>
            <small>stock disponible: {prod.stock}</small>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList
