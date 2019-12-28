import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const renderTextField = ({meta, label, input, variant, margin, ...custom}) => {
	const hasError = Boolean(meta.touched && meta.error);
	return (
		<div>
			<TextField helperText={ hasError && meta.error } error={hasError} label={label} placeholder={label} variant={variant} margin={margin}{...input} {...custom} />
		</div>
	)
};

const renderCheckbox = ({ input, label, name, color }) => (
	<div>
		<FormControlLabel
			control={<Checkbox checked={input.value ? true : false} onChange={input.onChange}/>}
			label={label}
			name={name}
			color={color}
		/>
	</div>
);

const required = value => value ? undefined : 'Обязательное поле';

export {renderTextField, renderCheckbox, required};