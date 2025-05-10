import { useFormContext } from '@/hooks/formContext';
import clsx from 'clsx';

export function SubscribeButton({ label }: { label: string }) {
	const form = useFormContext();

	return (
		<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
			{([canSubmit, isSubmitting]) => (
				<button
					type='submit'
					className={clsx(
						'rounded-md p-2 w-[200px] my-auto text-white',
						canSubmit ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed',
					)}
					disabled={isSubmitting || !canSubmit}
				>
					{label}
				</button>
			)}
		</form.Subscribe>
	);
}
