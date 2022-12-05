import $ from 'jquery'

function getApartment(zipCode, setQueriedApartments) {
	const settings = {
		async: true,
		crossDomain: true,
		url: `https://zillow-data.p.rapidapi.com/search?location=${zipCode}&page=1&status=ForRent`,
		method: 'GET',
		headers: {
			'X-RapidAPI-Key':
				'a0dd950b6emshb142b06496c7606p1e8090jsn8106a3332dee',
			'X-RapidAPI-Host': 'zillow-data.p.rapidapi.com',
		},
	}

	$.ajax(settings).done(function (response) {
		setQueriedApartments(response.data)
		console.log(response.data)
	})
}

export default getApartment

/**data example given for JQuery
 
address:"821 County Road 43830, Paris, TX 75462"
addressCity:"Paris"
addressState:"TX"
addressStreet:"821 County Road 43830"
addressZipcode:"75462"
area:2242
availabilityDate:null
badgeInfo:null
baths:2
beds:4
countryCurrency:"$"
detailUrl:"https://www.zillow.com/homedetails/821-County-Road-43830-Paris-TX-75462/299627571_zpid/"
has3DModel:true
hasAdditionalAttributions:false
hasImage:true
hasVideo:false
hdpData:
id:"299627571"
imgSrc:"https://photos.zillowstatic.com/fp/5dbd920255aef7d9cfb66d6cf17fe00e-p_e.jpg"
isFeaturedListing:false
isHomeRec:false
isSaved:false
isUndisclosedAddress:false
isUserClaimingOwner:false
isUserConfirmedClaim:false
isZillowOwned:false
latLong:
list:true
pgapt:"ForSale"
price:"$625,000"
providerListingId:null
relaxed:false
sgapt:"For Sale (Broker)"
shouldShowZestimateAsPrice:false
statusText:"House for sale"
statusType:"FOR_SALE"
unformattedPrice:625000
variableData:
text:"3D Tour"
type:"3D_HOME"
zestimate:462000
zpid:"299627571"

Api site
https://rapidapi.com/ntd119/api/zillow-data/
Temporary gmail
https://tempmail.dev/en/Gmail
*/

// 93d00f8f47mshc391b80aa686764p1bd833jsn58157fd197fa expired
// a0dd950b6emshb142b06496c7606p1e8090jsn8106a3332dee
// 870a59beb1msha5db8952ea5e5a8p107537jsn889f34ce2d59
// 4bb1c13341mshbafc97ff2108b12p1e8668jsne08301ebd75d
