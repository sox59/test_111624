const handler = async () => {

  const pet = [{ name: "Meowsalot", species: "cat" }]

  return {

    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet)


  }

}

module.exports = { handler }
