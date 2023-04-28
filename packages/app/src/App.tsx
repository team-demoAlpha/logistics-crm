import {useState} from 'react';
import classNames from 'classnames';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import sass from './App.module.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className={sass.logo} alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className={classNames(sass.logo, sass.react)} alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className={sass.card}>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className={sass.readTheDocs}>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
