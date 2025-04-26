'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { CHOICE_OPTIONS, type FormSchema, formSchema, formSchemaYup } from '../../schemas/form-schema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/Select';
import { yupResolver } from '@hookform/resolvers/yup';

export function ReactHookForm() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid },
	} = useForm<FormSchema>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			choice: CHOICE_OPTIONS.OPTION1,
		},
		mode: 'onChange',
		resolver: yupResolver(formSchemaYup),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		console.log('🚀 ~ ReactHookForm ~ data:', data);
		return new Promise((resolve) => setTimeout(resolve, 2000));
	};

	const selectOptions = Object.entries(CHOICE_OPTIONS).map(([key, value]) => ({
		value,
		label: key,
	}));

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex gap-6 justify-around mt-3 py-6'>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name'>name</label>
					<input type='text' {...register('name')} className='border-2 border-gray-300 rounded-md p-2 w-[300px]' />
					{errors.name && <span className='text-xs text-red-500'>{errors.name.message}</span>}
				</div>

				<div className='flex flex-col gap-1'>
					<label htmlFor='email'>email</label>
					<input type='email' {...register('email')} className='border-2 border-gray-300 rounded-md p-2 w-[300px]' />
					{errors.email && <span className='text-xs text-red-500'>{errors.email.message}</span>}
				</div>

				<div className='flex flex-col gap-1'>
					<label htmlFor='password'>password</label>
					<input
						type='password'
						{...register('password')}
						className='border-2 border-gray-300 rounded-md p-2 w-[300px]'
					/>
					{errors.password && <span className='text-xs text-red-500'>{errors.password.message}</span>}
				</div>

				<div className='flex flex-col gap-1'>
					<label htmlFor='choice'>Choice</label>
					<Controller
						name='choice'
						control={control}
						render={({ field }) => (
							<Select defaultValue={field.value} onValueChange={field.onChange}>
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
						)}
					/>
					{errors.choice && <span className='text-xs text-red-500'>{errors.choice.message}</span>}
				</div>
			</div>

			<button
				type='submit'
				className={clsx(
					'rounded-md p-2 w-[200px] my-auto text-white',
					isValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed',
				)}
				disabled={isSubmitting || !isValid}
			>
				{isSubmitting ? '...' : 'Submit'}
			</button>
		</form>
	);
}
