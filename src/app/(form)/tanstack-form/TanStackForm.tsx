'use client';

import { useAppForm } from '@/hooks/useAppForm';
import { CHOICE_OPTIONS, formSchema } from '../../schemas/form-schema';

export function TanStackForm() {
	const form = useAppForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			choice: 'option1',
		},
		onSubmit: async ({ value }) => {
			alert(JSON.stringify(value, null, 2));
		},
		validators: {
			onChangeAsync: formSchema,
			onBlurAsyncDebounceMs: 500,
		},
	});

	const selectOptions = Object.entries(CHOICE_OPTIONS).map(([key, value]) => ({
		value,
		label: key,
	}));

	return (
		<form onSubmit={form.handleSubmit} className='flex gap-6 justify-around mt-3 py-6'>
			<div className='flex flex-col gap-3'>
				<form.AppField
					name='name'
					// asyncDebounceMs={500}
					// validators={{
					// 	onChangeAsync: formSchema.shape.name,
					// }}
				>
					{(field) => <field.TextField label='Name' />}
				</form.AppField>
				<form.AppField
					name='email'
					// asyncDebounceMs={500}
					// validators={{
					// 	onChangeAsync: formSchema.shape.email,
					// }}
				>
					{(field) => <field.TextField label='Email' />}
				</form.AppField>
				<form.AppField
					name='password'
					// asyncDebounceMs={500}
					// validators={{
					// 	onChangeAsync: formSchema.shape.password,
					// }}
				>
					{(field) => <field.TextField label='Password' />}
				</form.AppField>
				<form.AppField name='choice'>
					{(field) => (
						<field.SelectField label='Choice' selectOptions={selectOptions} defaultValue={field.state.value} />
					)}
				</form.AppField>
			</div>

			<form.AppForm>
				<form.SubscribeButton label='Submit' />
			</form.AppForm>
		</form>
	);
}
