import React from 'react';
import "bulma/css/bulma.min.css";
import styles from './BrandDescription.module.css'


function BrandDescription(props) {
    return (
            <div className={styles.bloque}>
              <div className={styles.titulo}>
                <h1 class="title brand-description-title box">
                  Indumentaria para Infancias Libres
                </h1>
              </div>
              <div className={styles.parrafo}>
                <p className={styles.descripcion}>
                  Nuestras prendas LIBERI estan pensadas desde la libertad, el
                  amor y lo ludico. Creemos en las infancias múltiples, diversas,
                  singulares, creativas, y sobre todo, coloridas. Lo propio de las
                  infancias es la invención y creación, por eso apostamos a la
                  construcción de un nuevo paradigma donde abunden las
                  posibilidades de expresión para nuestrxs niñxs.
                </p>
              </div>
          </div>
    )
}

export default BrandDescription