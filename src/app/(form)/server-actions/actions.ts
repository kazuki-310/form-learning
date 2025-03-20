'use server';

import { type FormSchema, formSchema } from '@/app/schemas/form-schema';
import { redirect } from 'next/navigation';

type FormErrors = {
	[K in keyof FormSchema]?: string[];
};

export type FormStateWithErrors = FormSchema & {
	validatedErrors?: FormErrors;
};

export async function createPost(_: FormSchema, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const formValues = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		choice: formData.get('choice') as string,
	};

	const validatedFields = formSchema.safeParse(formValues);

	if (!validatedFields.success) {
		return {
			...formValues,
			validatedErrors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { name, email, password, choice } = validatedFields.data;

	return {
		name,
		email,
		password,
		choice,
	};
}
