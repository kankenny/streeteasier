import $ from 'jquery'

function getApartment(zipCode, setQueriedApartments) {
    const settings = {
        async: true,
        crossDomain: true,
        url: "https://zillow-data.p.rapidapi.com/search?location=%22+zipCode+%22&page=1&status=ForRent",
        method: "GET",
        headers: {
        "X-RapidAPI-Key": "832013e4ffmsh5b217b65299e63ap19e20fjsne988a718a15e",
        "X-RapidAPI-Host": "zillow-data.p.rapidapi.com"
        },
    }
    $.ajax(settings).done(function (response) {
        setQueriedApartments(response.results)
        //To display data in console uncomment
        return response.results
    })
}
export default getApartment