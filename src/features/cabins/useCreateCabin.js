import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinFn } from "../../services/apiCabins.js";
import { toast } from "react-hot-toast";

export function useCreateCabin() {
	const queryClient = useQueryClient();

	const { mutate : createCabin , isLoading: isCreating } = useMutation({
		// mutate(data) -> createCabin(data)
		mutationFn: createCabinFn,
		onSuccess: () => {
			toast.success("New Successfully created");
			//  update successfully -> cache is become stale (outdated)
			queryClient.invalidateQueries({ queryKey: ["cabins"] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { createCabin, isCreating };
}
