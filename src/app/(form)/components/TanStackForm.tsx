'use client';

import { useForm } from '@tanstack/react-form';
import clsx from 'clsx';
import { CHOICE_OPTIONS, formSchema } from '../../schemas/form-schema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';

export function TanStackForm() {
	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			choice: 'option1',
		},
		validators: {
			onChange: formSchema,
		},
		onSubmit: ({ value }) => {
			console.log('🚀 ~ TanStackForm ~ value:', value);
			alert(JSON.stringify(value, null, 2));
		},
	});

	const selectOptions = Object.entries(CHOICE_OPTIONS).map(([key, value]) => ({
		value,
		label: key,
	}));

	return (
		<form onSubmit={form.handleSubmit} className='flex gap-6 justify-around mt-3 py-6'>
			<div className='flex flex-col gap-3'>
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
								<span className='text-xs text-red-500'>{field.state.meta.errors[0]?.message}</span>
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
								<span className='text-xs text-red-500'>{field.state.meta.errors[0]?.message}</span>
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
								<span className='text-xs text-red-500'>{field.state.meta.errors[0]?.message}</span>
							) : null}
						</div>
					)}
				</form.Field>

				<form.Field name='choice'>
					{(field) => (
						<div className='flex flex-col gap-1'>
							<label htmlFor='choice'>Choice</label>
							<Select defaultValue={CHOICE_OPTIONS.OPTION1} onValueChange={field.handleChange}>
								<SelectTrigger className='w-[300px]'>
									<SelectValue placeholder='Select option' />
								</SelectTrigger>
								<SelectContent>
									{selectOptions.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					)}
				</form.Field>
			</div>

			<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
				{([canSubmit, isSubmitting]) => (
					<button
						type='submit'
						// disabled={!canSubmit}
						className={clsx(
							'rounded-md p-2 w-[200px] my-auto text-white',
							canSubmit ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed',
						)}
						disabled={isSubmitting || !canSubmit}
					>
						{isSubmitting ? '...' : 'Submit'}
					</button>
				)}
			</form.Subscribe>
		</form>
	);
}
