export default function truncateAddressString(address) {
	return address.split(' ').splice(0, 4).join(' ')
}
