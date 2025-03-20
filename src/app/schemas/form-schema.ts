import { z } from 'zod';

export const CHOICE_OPTIONS = {
	OPTION1: 'option1',
	OPTION2: 'option2',
	OPTION3: 'option3',
	OPTION4: 'option4',
	OPTION5: 'option5',
} as const;

export type ChoiceOption = (typeof CHOICE_OPTIONS)[keyof typeof CHOICE_OPTIONS];

export const formSchema = z.object({
	name: z.string().min(6, 'Name must be at least 6 characters long'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
	choice: z.enum(Object.values(CHOICE_OPTIONS) as [string, ...string[]]),
});

export type FormSchema = z.infer<typeof formSchema>;
