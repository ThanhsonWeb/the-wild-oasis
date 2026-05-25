import supabase from "./supabase";


export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	// read cabins from database ->   give result to data
	if (error) {
		console.error(error.message);
		throw new Error("Canbins could not be loaded");
	}
	return data;
}

// b1 : create function read cabins from database

export async function createCabin(newCabin) {
	const { data, error } = await supabase.from("cabins").insert([newCabin]);

	if (error) {
		console.error(error);
		throw new Error("Cabin could not be created");
	}

	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		throw new Error("Cabin could not be deleted");
	}

	return data;
}
