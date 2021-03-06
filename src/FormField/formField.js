import formField from "./formField.module.css";

export default function FormField({
	autofocus = false,
	label,
	labelContent = label[0].toUpperCase() + label.substring(1).toLowerCase(),
	format = "text",
	required = false,
	value = "",
	onChange = () => {},
}) {
	return (
		<fieldset className={formField.field}>
			<legend>
				<label htmlFor={label}>{labelContent}</label>
			</legend>
			<input
				required={required}
				autoFocus={autofocus}
				type={format}
				id={label}
				name={label}
				value={value}
				onChange={onChange}
			/>
		</fieldset>
	);
}
