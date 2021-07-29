import Head from 'next/head';
import { useState } from 'react';

export default function Home({ dog }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const isFormValid = username.length > 0 && password.length > 0;

	function onSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsSubmitted(true);
		}, 2000);
	}

	return (
		<div className="flex items-center justify-center w-full h-screen dark:bg-gray-900">
			<div className="w-[250px] mx-auto">
				<form className="flex flex-col space-y-3" onSubmit={onSubmit}>
					<div className="text-4xl font-bold text-gray-800 dark:text-white">
						Login
					</div>
					<input
						value={username}
						onChange={(e) => setUsername(e.currentTarget.value)}
						placeholder="Benutzername"
						className="px-4 py-2 rounded shadow outline-none dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-red-500"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
						placeholder="Password"
						className="px-4 py-2 rounded shadow outline-none dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-primary"
					/>
					<button
						disabled={!isFormValid}
						type="submit"
						className="self-end px-4 py-2 font-bold text-white bg-red-500 rounded shadow disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-red-500"
					>
						{!isLoading ? (
							'Submit'
						) : (
							<svg
								className="animate-spin"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
							>
								<path fill="none" d="M0 0h24v24H0z" />
								<path
									d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"
									fill="rgba(255,255,255,1)"
								/>
							</svg>
						)}
					</button>
				</form>
				{isSubmitted && (
					<div className="mt-10">
						<div className="font-bold dark:text-white">Output: </div>
						<pre className="p-3 bg-gray-100 rounded-lg">
							{JSON.stringify(
								{
									username,
									password,
								},
								null,
								2
							)}
						</pre>
					</div>
				)}
			</div>
		</div>
	);
}
