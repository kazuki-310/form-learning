import Link from 'next/link';

const LINKS = [
	{ href: '/form/tanstack-form', label: 'TanStack Form' },
	{ href: '/form/react-hook-form', label: 'React Hook Form' },
];

export default function Page() {
	return (
		<>
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
