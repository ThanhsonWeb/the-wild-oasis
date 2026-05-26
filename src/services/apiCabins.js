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
  // 1. Create a unique name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  // 2. Upload image first
  const { error: storageError } = await supabase.storage
    .from("cabin-images") // bucket name
    .upload(imageName, newCabin.image); //0.17775415009561468-cabin-006.jpg

  if (storageError) {
    console.error(storageError);
    throw new Error("Image upload failed");
  }

  // 3. Get public URL
  const { data: urlData } = supabase.storage
    .from("cabin-images")
    .getPublicUrl(imageName);

  const imagePath = urlData.publicUrl;

  // 4. Insert cabin with image URL
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

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
