export const Api = {
    baseUrl: "http://localhost:3001",

    buildApiGetRequest: url =>
    fetch(url, {
        method: "GET",
    }),

// POST
buildApiPostRequest: (url, body) =>
    fetch(url, {
        method: "POST",
        headers: new Headers({
            "Content-type": "application/json",
        }),
        body: JSON.stringify(body),
    }),

// PATCH
buildApiPatchRequest: (url, body) =>
    fetch(url, {
        method: "PATCH",
        headers: new Headers({
            "Content-type": "application/json",
        }),
        body: JSON.stringify(body),
    }),

// DELETE
buildApiDeleteRequest: url =>
    fetch(url, {
        method: "DELETE",
    }),
};