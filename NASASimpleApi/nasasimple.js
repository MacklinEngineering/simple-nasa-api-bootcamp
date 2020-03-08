(async function() {

  const nasa_url = "https://api.nasa.gov/planetary/apod?api_key=jhXqd8TrtxSbf8zxU47A9RgdThKr5wUtoj0baugU&date=" //until ".com/" - a descriptive url variable

  document.getElementById("Submit").addEventListener("click", async () => { //with an anonomous function call (fat arrow notation)
  let userDateInput = document.getElementById("userDateInput").value

  const stringUserInput = userDateInput.toString()
  const new_url = nasa_url.concat(stringUserInput)

  const response = await fetch(`${new_url}`) //used template literal to get a particular route (albums) - used fetch to get that info and await

  const result = await response.json()

  async function getDataFromUSER(userDateInput) { //initialized asyncronous function that takes in one parameter - the date
    const apiResponse = await fetch(`${nasa_url}${userDateInput}`)
    const apiResult = await apiResponse.json()
    return apiResult
    }

    // console.log(userDateInput)
    let date = await getDataFromUSER(userDateInput)
    document.querySelector("p").innerHTML = date.date
    document.querySelector("p").innerHTML = date.explanation
    document.querySelector("img").src = date.url
    document.querySelector("iframe").src = date.url


    // if date.mediatype == "video"
  })


})()
