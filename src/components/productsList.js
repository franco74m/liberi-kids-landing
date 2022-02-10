// import react from "react";
import "bulma/css/bulma.min.css";
import styles from "./productList.module.css";

// const products = [
//   {
//     name: "Remera Modelo Fauna",
//     description: "",
//     price: 12,
//   },
// ];

function ProducList(props) {
  return (
    <div className="container is-flex is-justify-content-space-around is-flex-wrap-wrap is-">
      <div className={`${styles.card} card `}>
        <div className={`${styles.cardimage} card-image `}>

            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZCUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Placeholder"
            ></img>

        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <p className="title is-4">Modelo prenda</p>
              <p className="subtitle is-6">Descripcion</p>
              <p className="subtitle is-6">Precio</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.card} card `}>
        <div className={`${styles.cardimage} card-image `}>

            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZCUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Placeholder"
            ></img>

        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <p className="title is-4">Modelo prenda</p>
              <p className="subtitle is-6">Descripcion</p>
              <p className="subtitle is-6">Precio</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.card} card `}>
      <div className={`${styles.cardimage} card-image `}>
        <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZCUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Placeholder"
            ></img>

        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <p className="title is-4">Modelo prenda</p>
              <p className="subtitle is-6">Descripcion</p>
              <p className="subtitle is-6">Precio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProducList;
