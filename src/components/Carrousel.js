import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carrousel.module.css'

function Carrousel () {
return (
	<div className={styles.carrusel}>

	<Carousel>
		<Carousel.Item interval={4000}>
		<img
			className={styles.pic1}
      src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZCUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
			alt="pic One"
		/>
		<Carousel.Caption>
			<h3>Chomba roja facherita</h3>
			<p>$12 ARS</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={4000}>
		<img
			className={styles.pic2}
      src="https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
			alt="pic Two"
		/>
		<Carousel.Caption>
			<h3>Conjunto marron rompecorazones</h3>
			<p>$220 ARS</p>
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={4000}>
		<img
			className={styles.pic3}
      src="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
			alt="pic three"
		/>
		<Carousel.Caption>
			<h3>Conjunto Oso Salvaje</h3>
			<p>u$d 540</p>
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={4000}>
		<img
			className={styles.pic4}
      src="https://images.unsplash.com/photo-1530845645774-eed359045642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
			alt="pic One"
		/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}


  export default Carrousel;
