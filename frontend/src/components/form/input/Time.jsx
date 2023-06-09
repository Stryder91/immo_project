export const Time = () => {
	return  <div className="w-full px-3 sm:w-1/2">
		<div className="mb-5">
			<label
				for="time"
				className="mb-3 block text-base font-medium text-[#07074D]"
			>
				Time
			</label>
			<input
				type="time"
				name="time"
				id="time"
				className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
			/>
		</div>
	</div>
}