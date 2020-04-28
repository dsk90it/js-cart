const getCart = async () => {
	const response = await fetch('data.json')

	if (response.status === 200) {
		const result = await response.json()
		const data = result

		return data
	} else {
		throw new Error('Unable to get data')
	}
}

export { getCart as default }
