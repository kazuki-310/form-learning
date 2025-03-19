'use client';

import { useForm } from '@tanstack/react-form';

export function TanStackForm() {
	const form = useForm({
		defaultValues: {
			username: '',
			age: 0,
		},

		onSubmit: ({ value }) => {
			console.log('🚀 ~ TanStackForm ~ value:', value);
			// Do something with form data
			alert(JSON.stringify(value, null, 2));
		},
	});

	return (
		<div className='flex flex-col gap-4 p-4'>
			<form.Field
				name='username'
				validators={{ onChange: ({ value }) => (value.length > 3 ? undefined : 'Must be at least 4 characters') }}
			>
				{(field) => (
					<div className='flex flex-col gap-2'>
						<input
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							className='border-2 border-gray-300 rounded-md p-2 w-56'
						/>
						{field.state.meta.errors.length ? <em>{field.state.meta.errors.join(',')}</em> : null}
					</div>
				)}
			</form.Field>

			<form.Field
				name='age'
				validators={{
					onChange: ({ value }) => (value > 13 ? undefined : 'Must be 13 or older'),
				}}
			>
				{(field) => (
					<div className='flex flex-col gap-2'>
						<input
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							type='number'
							onChange={(e) => field.handleChange(e.target.valueAsNumber)}
							className='border-2 border-gray-300 rounded-md p-2 w-56'
						/>
						{field.state.meta.errors.length ? <em>{field.state.meta.errors.join(',')}</em> : null}
					</div>
				)}
			</form.Field>
		</div>
	);
}
