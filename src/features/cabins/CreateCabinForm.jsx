import Input from "../../ui/Input.jsx";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow.jsx";
import { useCreateCabin } from "./useCreateCabin.js";

function CreateCabinForm() {
	// custom hook
	const { isCreating, mutate } = useCreateCabin();

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm();

	function onSubmit(data) {
		const file = data.image?.[0]; // safe access
		mutate({ ...data, image: file });
	}

	function onError(errors) {
		console.log(errors);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			{/* use FormRow component */}
			<FormRow label="Cabin name" error={errors?.name?.message}>
				<Input
					type="text"
					id="name"
					{...register("name", { required: "This filed is required" })}
				/>
			</FormRow>

			{/* 2 */}
			<FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
				<Input
					type="number"
					id="maxCapacity"
					{...register("maxCapacity", { required: "This filed is required" })}
				/>
			</FormRow>
			{/*3  */}
			<FormRow label="Regular price" error={errors?.regularPrice?.message}>
				<Input
					type="number"
					id="regularPrice"
					{...register("regularPrice", {
						required: "This filed is required",
						min: { value: 1, message: " Capacity should be at least 1 " },
					})}
				/>
			</FormRow>
			{/*4 */}
			<FormRow label="Discount" error={errors?.discount?.message}>
				<Input
					type="number"
					id="discount"
					defaultValue={0}
					{...register("discount", {
						// use getValues
						required: "This filed is required",
						validate: (value) =>
							value <= +getValues().regularPrice ||
							"discount should be smaller than price",
					})}
				/>
			</FormRow>
			{/* 5 */}
			<FormRow label="Description for website">
				<Textarea
					type="number"
					id="description"
					defaultValue=""
					{...register("description", { required: "This filed is required" })}
				/>
			</FormRow>
			{/* 6 */}
			<FormRow label="Cabin photo">
				<FileInput
					id="image"
					accept="image/*"
					{...register("image", { required: "This filed is required" })}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button variation="secondary" type="reset">
					Cancel
				</Button>
				{/* disabled when isCreating is true */}
				<Button disabled={isCreating}>Create cabin</Button>
			</FormRow>
		</Form>
	);
}

export default CreateCabinForm;
