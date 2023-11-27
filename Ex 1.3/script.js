function parseCookie(str) {
    return str
      .split(";")
      .map((v) => v.split("="))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
          v[1].trim()
        );
        return acc;
      }, {});
  }

  function getAndParseCookie() {
    const cookieString = document.getElementById("cookieInput").value;
    const parsedCookie = parseCookie(cookieString);

    // Display the parsed cookie information on the web page
    const resultDiv = document.getElementById("parsedCookieResult");
    resultDiv.innerHTML =
      "<pre>" + JSON.stringify(parsedCookie, null, 2) + "</pre>";
  }
