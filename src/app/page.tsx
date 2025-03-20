import Link from 'next/link';

const LINKS = [
	{ href: 'tanstack-form', label: 'TanStack Form' },
	{ href: 'react-hook-form', label: 'React Hook Form' },
	{ href: 'server-actions', label: 'Server Actions' },
];

export default function Page() {
	return (
		<>
			<h2>form の再レンダリング周りや使い方、server actions の確認</h2>
			<div className='flex flex-col gap-2'>
				{LINKS.map((link) => (
					<Link key={link.label} href={link.href} className='rounded-md font-semibold hover:bg-gray-100 p-1.5'>
						・{link.label}
					</Link>
				))}
			</div>
		</>
	);
}
