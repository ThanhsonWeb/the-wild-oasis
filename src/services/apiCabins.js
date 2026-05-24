import supabase from "./supabase";

// step 2 : 

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	// read cabins from database ->   give result to data
	if (error) {
		console.error(error.message);
		throw new Error("Canbins could not be loaded");
	}
	return data;
}
