import { useEffect, useState } from "react";


//create your first component
const Home = () => {
	const [characters, setCharacters] = useState([])
	const [loading, setLoading] = useState(false)

	// .then
	// const getCharacter = () => {
	// 	fetch("https://rickandmortyapi.com/api/character")
	// 		.then((response) => response.json())
	// 		.then((deimian) => setCharacters(deimian.results))
	// 		.catch((err) => console.log(err))
	// }


	const getCharacter = async () => {
		try {
			setLoading(true)
			const response = await fetch("https://rickandmortyapi.com/api/character")
			const data = await response.json()

			if (response.ok) {
				setCharacters(data.results)
			}

		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}


	useEffect(() => {
		getCharacter()
	}, [])

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							{
								loading ?
									<h1>Cargandooooooo....</h1> :
									characters.map((item) => {
										const { id, name, species } = item
										return (
											<li key={id}>
												{`Hola ¿qué tal ${name}? Mi especie es ${species}`}
											</li>
										)
									})
							}

						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;