import React, { useState } from "react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderPlacement = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const min = 100;
	const max = 300;

	const [value, setValue] = useState("");

	const [user] = useAuthState(auth);

	const handleChange = (e) => {
		e.preventDefault();
		const value = Math.max(min, Math.min(max, Number(e.target.value)));
		// Number() converts string into number type
		// Math.min() - taking two arguments, max and number which is given -- finds the lowest
		// Math.max() - taking two arguments, min and the lowest -- finds the largest
		// Formula: Math.max(a, Math.min(b, x))
		setValue(value);
	};

	// useEffect(() => {
	// 	if (value < min) {
	// 		setIsButtonDisabled(true);
	// 	} else {
	// 		setIsButtonDisabled(false);
	// 	}
	// }, [value]);

	const addressRef = useRef("");
	const phoneRef = useRef("");
	const quantityRef = useRef();

	const handleOrder = (e) => {
		e.preventDefault();
		const address = addressRef.current.value;
		const phone = phoneRef.current.value;
		const quantity = quantityRef.current.value;

		const order = {
			orderId: user._id,
			// product: name,
			userName: user.displayName,
			email: user.email,
			address: address,
			phone: phone,
			quantity: quantity,
		};

		fetch(`https://supermarche-livre-02956.herokuapp.com/orders`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
			});
	};

	return (
		<div className="hero my-10">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<p className="text-center text-xl">Place Order</p>
					<form onSubmit={handleOrder}>
						<textarea
							autoComplete="off"
							ref={addressRef}
							className="textarea textarea-bordered mb-2"
							id="exampleFormControlTextarea1"
							name="address"
							cols="30"
							rows="10"
							placeholder="Address"></textarea>
						<br />
						<input
							className="input input-bordered w-full max-w-xs mb-3"
							autoComplete="off"
							ref={phoneRef}
							type="tel"
							name="phone"
							id="phone"
							placeholder="Phone Number"
						/>
						<br />
						<input
							className="input input-bordered w-full max-w-xs mb-3"
							autoComplete="off"
							ref={quantityRef}
							type="number"
							placeholder="Enter the quantity"
							value={value}
							onChange={handleChange}
						/>
						<br />
						<input
							className="btn btn-primary"
							disabled={
								value < min || value > max
									? isButtonDisabled
									: !isButtonDisabled
							}
							type="submit"
							value="Complete Purchase"
						/>
						<br />
					</form>
				</div>
			</div>
		</div>
	);
};

export default OrderPlacement;
