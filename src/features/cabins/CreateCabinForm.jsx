import Input from "../../ui/Input.jsx";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins.js";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import FormRow from "../../ui/FormRow.jsx";

function CreateCabinForm() {
	const {
		register,
		handleSubmit,
		reset,
		// b2 . we need this
		getValues,
		formState: { errors },
	} = useForm();

	const queryClient = useQueryClient();

	const { mutate, isLoading: isCreating } = useMutation({
		// mutate(data) -> createCabin(data)
		mutationFn: createCabin,
		onSuccess: () => {
			toast.success("New Successfully created");
			//  update successfully -> cache is become stale (outdated)
			queryClient.invalidateQueries({ queryKey: ["cabins"] });
			// tells react Query : “this data is no longer fresh, go get the latest version.”
			reset();
		},
		onError: (err) => toast.error(err.message),
	});

	function onSubmit(data) {
		mutate(data);
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
				<FileInput id="image" accept="image/*" />
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
