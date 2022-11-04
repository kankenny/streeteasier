//JQuery
import React from "react";
import $ from "jquery";


 let streetAddress, bathroom, bedrooms, price, zip, img, url, longitude, latitude, homeStatus;
 
function getApartment(zipCode){
	 let settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://zillow-data.p.rapidapi.com/search?location="+zipCode+"&page=1&status=ForRent",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "fc99c463demsh7f956285a9d0189p195365jsncb051133cf78",
			"X-RapidAPI-Host": "zillow-data.p.rapidapi.com"
		}
	};
	
	$.ajax(settings).done(function (response) {
		
		setApartments(response);
	});
}
function setApartments(response){
	for(let i=0;i<response.data.length;i++){
		 streetAddress=response.data[i].address;
		 bathroom=response.data[i].baths;
		 bedrooms=response.data[i].beds;
		 price=response.data[i].price;
		 zip=response.data[i].addressZipcode;
		 img=response.data[i].imgSrc;
		 url=response.data[i].detailUrl;
		 longitude=response.data[i].longitude;
		 latitude=response.data[i].latitude;
		 homeStatus=response.data[i].statusText;
		console.log("\nImage:"+img+"\nDetails:"+url+"\nAddress: "+streetAddress+"\nBathrooms:"+bathroom+"\nBedrooms:"+bedrooms+"\nPrice:"+price+"\nZipcode:"+zip+"\nHome Status:"+homeStatus);
	}
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

