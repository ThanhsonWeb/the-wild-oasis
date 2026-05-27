import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
	const [isOpenModal, setIsOpenModel] = useState(false);
	// b3 : using Button to control <CreateCabinForm/>
	return (
		<div>
			<Button onClick={() => setIsOpenModel((show) => !show)}>
				Add new Cabin
			</Button>

			{isOpenModal && (
				<Modal onClose={() => setIsOpenModel(false)}>
					<CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
				</Modal>
			)}
		</div>
	);
}

export default AddCabin;
