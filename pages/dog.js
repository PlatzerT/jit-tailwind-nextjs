import React from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Image from 'next/image';

export async function getServerSideProps() {
	const dog = await fetcher('https://dog.ceo/api/breeds/image/random');
	return {
		props: {
			dog,
		},
	};
}

export default function Dog({ dog }) {
	const { data } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher, {
		initialData: dog,
	});

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="relative flex rounded-sm shadow-lg">
				<div className="absolute z-10 p-4 bg-white border rounded-md shadow-md -right-10 -top-10">
					<div className="text-xl font-semibold text-red-900">Dog</div>
					<div className="text-sm text-red-600">
						Find your new buddy for your home!
					</div>
					<span className="absolute flex w-4 h-4 -top-2 -right-2">
						<span className="absolute inline-flex w-4 h-4 bg-red-400 rounded-full opacity-75 animate-ping"></span>
						<span className="relative inline-flex w-4 h-4 bg-red-500 rounded-full"></span>
					</span>
				</div>
				<Image src={data.message} height="400" width="400" alt="Dog" />
			</div>
		</div>
	);
}
