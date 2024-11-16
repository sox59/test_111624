const handler = async () => {




  return {

    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "paul".toLocaleUpperCase()


  }

}

module.exports = { handler }
