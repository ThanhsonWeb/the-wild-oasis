import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiSquares2X2, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

const TableRow = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
	column-gap: 2.4rem;
	align-items: center;
	padding: 1.4rem 2.4rem;

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}
`;

const Img = styled.img`
	display: block;
	width: 6.4rem;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	object-position: center;
	transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: "Sono";
`;

const Price = styled.div`
	font-family: "Sono";
	font-weight: 600;
`;

const Discount = styled.div`
	font-family: "Sono";
	font-weight: 500;
	color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
	const [isOpenDelete, setIsOpenDelete] = useState(false);

	// hook
	const { isDeleting, deleteCabin } = useDeleteCabin();
	const { isCreating, createCabin } = useCreateCabin();

	const {
		id: cabinId,
		name,
		image,
		discount,
		maxCapacity,
		description,
		regularPrice,
	} = cabin;
	function handleDuplicate() {
		createCabin({
			name: `Copy of ${name}`,
			maxCapacity,
			regularPrice,
			discount,
			image,
			description,
		});
	}

	function handleDelete() {
		setIsOpenDelete(true);
	}

	return (
		<TableRow role="row">
			<Img src={image} />
			<Cabin>{name}</Cabin>
			<div> {maxCapacity} guests</div>
			<Price>{formatCurrency(regularPrice)}</Price>
			<Discount>{formatCurrency(discount)}</Discount>
			<div>
				{/* B3. ADD BUTTON */}
				<button disabled={isCreating} onClick={handleDuplicate}>
					<HiSquares2X2 />
				</button>
				<button onClick={handleDelete} disabled={isDeleting}>
					<HiTrash />
				</button>
				{isOpenDelete && (
					<Modal>
						<ConfirmDelete
							resourceName="cabins"
							disabled={isDeleting}
							onConfirm={() => deleteCabin(cabinId)}
							onCloseDelete={() => setIsOpenDelete(false)}
						/>
					</Modal>
				)}
			</div>
		</TableRow>
	);
}

export default CabinRow;
