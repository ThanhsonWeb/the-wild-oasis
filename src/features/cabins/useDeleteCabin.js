import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinFn } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeleteCabin() {
	const queryClient = useQueryClient();

	const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
		// ex : mutate(cabinId) -> deleteCabin(cabinId)
		mutationFn: deleteCabinFn,
		onSuccess: () => {
			toast.success("Cabin successfully deleted");
			// mutate change data -> cache is outdate -> refresh cabins list after deletion
			queryClient.invalidateQueries({ queryKey: ["cabins"] });
			// without invalidateQueries UI will not change even database changed
		},
		onError: (err) => toast.error(err.message),
	});

	return { deleteCabin, isDeleting };
}
