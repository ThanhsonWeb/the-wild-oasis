import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	// read cabins from database ->   give result to data
	if (error) {
		console.error(error.message);
		throw new Error("Canbins could not be loaded");
	}
	return data;
}
// https://cmzzfqlehqfrztjvsxrk.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

export async function createCabin(newCabin) {
	// b1: create a unique name
	const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
		"/",
		"",
	);
	// b2:  supabaseUrl = https://cmzzfqlehqfrztjvsxrk.supabase.co
	const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	const { data, error } = await supabase
		.from("cabins")
		// b3: Insert imagePath to newCabin
		.insert([{ ...newCabin, image: imagePath }]);

	if (error) {
		console.error(error);
		throw new Error("Cabin could not be created");
	}

	// b4. Upload image
	const { error: storageError } = await supabase.storage
		.from("cabin-images") // bucket name
		.upload(imageName, newCabin.image);

	if (storageError) throw new Error("Image upload failed");

	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		throw new Error("Cabin could not be deleted");
	}

	return data;
}
