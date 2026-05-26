import { useQuery } from "@tanstack/react-query";
import getSettings from "../../services/apiSettings";

// B1 : Create a custom hook to fetch Settings row

export function useSettings() {
	const {
		data: settings,
		isLoading,
		error,
	} = useQuery({ queryKey: ["setting"], queryFn: getSettings });

	return { isLoading, error, settings };
}
