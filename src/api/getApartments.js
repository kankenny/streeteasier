import $ from 'jquery'

function getApartment(zipCode) {
	const settings = {
		async: true,
		crossDomain: true,
		url: 'https://zillow56.p.rapidapi.com/search?location=' + zipCode,
		method: 'GET',
		headers: {
			'X-RapidAPI-Key':
				'60a2ffb178msh52804e6d695b5ebp1c4d20jsne4945580ae1d',
			'X-RapidAPI-Host': 'zillow56.p.rapidapi.com',
		},
	}

	$.ajax(settings).done(function (response) {
		return response.results
	})
}

export default getApartment

/**data example given for JQuery
 
API keys:
 - 60a2ffb178msh52804e6d695b5ebp1c4d20jsne4945580ae1d (Expired October)
 - f672cb55d2msh156ceafe66ad2d1p1fb5c8jsnc445b85e1291 (Invalid)
 - 9cd1df1404mshab9e960cc07c31ap11aaefjsn2ffb38fba050 (Invalid)
*/

/**data example given for JQuery
 
bathrooms: 4
bedrooms: 3
city: "Houston"
country: "USA"
currency: "USD"
datePriceChanged: 1664607600000
daysOnZillow: -1
homeStatus: "FOR_SALE"
homeStatusForHDP: "FOR_SALE"
homeType: "SINGLE_FAMILY"
isFeatured: false
isNonOwnerOccupied: true
isPreforeclosureAuction: false
isPremierBuilder: false
isUnmappable: false
isZillowOwned: false
latitude: 29.745394
listing_sub_type: {is_FSBA: true, is_openHouse: true}
livingArea: 2759
longitude: -95.39548
lotAreaUnit: "sqft"
lotAreaValue: 1524.6
openHouse: "Sun. 3-5pm"
open_house_info: {open_house_showing: Array(1)}
price: 599000
priceChange: -9000
priceForHDP: 599000
priceReduction: "$9,000 (Oct 1)"
rentZestimate: 3851
shouldHighlight: false
state: "TX"
streetAddress: "1505 Missouri St"
taxAssessedValue: 538200
zestimate: 588216
zipcode: "77006"
zpid: 126260205

*/
