import Link from 'next/link';

export default function Header() {
	return (
		<header className='px-4 py-2 border-b'>
			<h1 className='text-2xl font-bold'>
				<Link href='/'>Form Learning</Link>
			</h1>
		</header>
	);
}
