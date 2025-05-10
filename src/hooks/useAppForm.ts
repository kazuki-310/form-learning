import { SelectField } from '@/app/components/form/select-field';
import { SubscribeButton } from '@/app/components/form/subscribe-button';
import { TextField } from '@/app/components/form/text-field';
import { fieldContext, formContext } from '@/hooks/formContext';
import { createFormHook } from '@tanstack/react-form';

export const { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		TextField,
		SelectField,
	},
	formComponents: {
		SubscribeButton,
	},
});
