import { useFieldContext } from '@/hooks/formContext';
import { Select, SelectValue } from '@radix-ui/react-select';
import { SelectContent, SelectItem, SelectTrigger } from '../Select';

type SelectOption = {
	value: string;
	label: string;
};

export function SelectField({
	label,
	selectOptions,
	defaultValue,
}: {
	label: string;
	selectOptions: SelectOption[];
	defaultValue?: string;
}) {
	const field = useFieldContext<string>();

	return (
		<div className='flex flex-col gap-1'>
			<label htmlFor={label}>{label}</label>
			<Select defaultValue={defaultValue} onValueChange={field.handleChange}>
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
	);
}
