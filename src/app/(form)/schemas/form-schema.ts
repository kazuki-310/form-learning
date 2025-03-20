import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(6, 'Name must be at least 6 characters long'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
});
