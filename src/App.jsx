import { useState } from 'react';
import phrases from './phrases.json';
import { bg1, bg2, bg3, bg4, img1, img2 } from './assets/images';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import './App.css';
const images = [bg1, bg2, bg3, bg4];

function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase);
	const [bgRandom, setbgRandom] = useState(images[getRandomIndex(images)]);

	const [animate, setAnimate] = useState(false);

	const handleClick = () => {
		setPhrase(phrases[getRandomIndex(phrases)].phrase);
		setbgRandom(images[getRandomIndex(images)]);
		setAnimate(true);

		setTimeout(() => setAnimate(false), 2000);
	};
	const bgStyle = `url('${bgRandom}')`;
	return (
		<div className="wrapper" style={{ backgroundImage: bgStyle }}>
			<div className="container">
				<h1 className="tittle">Galleta de la fortuna</h1>
				<div className="container__card">
					<img
						src={img1}
						alt="gallleta"
						className={`one cookie ${animate ? 'animate' : ''}`}
					/>
					<blockquote className={`card ${animate ? 'animate2' : ''}`}>
						<div className="card__body">
							<p className="card__text">
								<BiSolidQuoteAltLeft className="card__quote" /> {phrase}{' '}
								<BiSolidQuoteAltRight className="card__quote" />
							</p>
						</div>
					</blockquote>
					<img
						src={img2}
						alt="gallleta"
						className={`two cookie ${animate ? 'animate1' : ''}`}
					/>
				</div>
				<button className="btn" onClick={handleClick}>
					Abrir una galleta
				</button>
			</div>
		</div>
	);
}

export default App;
