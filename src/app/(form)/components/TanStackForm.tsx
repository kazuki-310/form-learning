'use client';

import { useForm } from '@tanstack/react-form';
import { formSchema } from '../schemas/form-schema';

export function TanStackForm() {
	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
		validators: {
			onChange: formSchema,
		},
		onSubmit: ({ value }) => {
			console.log('🚀 ~ TanStackForm ~ value:', value);
			alert(JSON.stringify(value, null, 2));
		},
	});

	return (
		<form onSubmit={form.handleSubmit} className='flex flex-col gap-3 p-4 border-2 rounded-md mt-3'>
			<form.Field name='name'>
				{(field) => (
					<div className='flex flex-col gap-1'>
						<label htmlFor={field.name}>name</label>
						<input
							id={field.name}
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							className='border-2 border-gray-300 rounded-md p-2 w-[300px]'
						/>
						{field.state.meta.errors ? (
							<pre className='text-xs text-red-500'>{field.state.meta.errors[0]?.message}</pre>
						) : null}
					</div>
				)}
			</form.Field>

			<form.Field name='email'>
				{(field) => (
					<div className='flex flex-col gap-1'>
						<label htmlFor={field.name}>email</label>
						<input
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							type='email'
							onChange={(e) => field.handleChange(e.target.value)}
							className='border-2 border-gray-300 rounded-md p-2 w-[300px]'
						/>
						{field.state.meta.errors ? (
							<pre className='text-xs text-red-500'>{field.state.meta.errors[0]?.message}</pre>
						) : null}
					</div>
				)}
			</form.Field>

			<form.Field name='password'>
				{(field) => (
					<div className='flex flex-col gap-1'>
						<label htmlFor={field.name}>password</label>
						<input
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							type='password'
							onChange={(e) => field.handleChange(e.target.value)}
							className='border-2 border-gray-300 rounded-md p-2 w-[300px]'
						/>
						{field.state.meta.errors ? (
							<pre className='text-xs text-red-500'>{field.state.meta.errors[0]?.message}</pre>
						) : null}
					</div>
				)}
			</form.Field>

			<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
				{([canSubmit, isSubmitting]) => (
					<button
						type='submit'
						disabled={!canSubmit}
						className={`rounded-md p-2 w-[300px] text-white ${canSubmit ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
					>
						{isSubmitting ? '...' : 'Submit'}
					</button>
				)}
			</form.Subscribe>
		</form>
	);
}
