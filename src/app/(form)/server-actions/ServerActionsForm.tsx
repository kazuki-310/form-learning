'use client';

import { CHOICE_OPTIONS, type FormSchema } from '@/app/schemas/form-schema';
import clsx from 'clsx';
import { useActionState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/Select';
import { type FormStateWithErrors, createPost } from './actions';

const defaultValue = {
	name: '',
	email: '',
	password: '',
	choice: CHOICE_OPTIONS.OPTION1,
};

export function ServerActionsForm() {
	const [state, formAction, isPending] = useActionState<FormStateWithErrors, FormData>(createPost, defaultValue);
	console.log('🚀 ~ ServerActionsForm ~ state:', state);

	const selectOptions = Object.entries(CHOICE_OPTIONS).map(([key, value]) => ({
		value,
		label: key,
	}));

	return (
		<form action={formAction} className='flex gap-6 justify-around mt-3 py-6'>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name'>name</label>
					<input
						type='text'
						name='name'
						defaultValue={state.name}
						className='border-2 border-gray-300 rounded-md p-2 w-[300px]'
					/>
					{state.validatedErrors && <span className='text-xs text-red-500'>{state.validatedErrors.name}</span>}
				</div>

				<div className='flex flex-col gap-1'>
					<label htmlFor='email'>email</label>
					<input
						type='text'
						name='email'
						defaultValue={state.email}
						className='border-2 border-gray-300 rounded-md p-2 w-[300px]'
					/>
					{state.validatedErrors && <span className='text-xs text-red-500'>{state.validatedErrors.email}</span>}
				</div>

				<div className='flex flex-col gap-1'>
					<label htmlFor='password'>password</label>
					<input
						type='password'
						name='password'
						defaultValue={state.password}
						className='border-2 border-gray-300 rounded-md p-2 w-[300px]'
					/>
					{state.validatedErrors && <span className='text-xs text-red-500'>{state.validatedErrors.password}</span>}
				</div>

				<div className='flex flex-col gap-1'>
					<label htmlFor='choice'>Choice</label>
					<Select name='choice' defaultValue={state.choice} onValueChange={(value) => console.log(value)}>
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
			</div>

			<button type='submit' className='rounded-md p-2 w-[200px] my-auto text-white bg-blue-500'>
				{isPending ? '...' : 'Submit'}
			</button>
		</form>
	);
}
