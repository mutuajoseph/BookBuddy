const BASE_URL = "http://localhost:8001"

// 1. GET SERVICE 
export const fetchAllBooks = async () => {
    try {
        // use the fetch api to make a get request 
        const response = await fetch(`${BASE_URL}/books`, {
            method: "GET",
            headers: {}
        })

        if (response.ok) {
            const result = await response.json()
            return result
        } else {
            const result = await response.json()
            return result
        }

    } catch (error) {
        console.err(error)
        throw Error("Error", error)
    }
}

// 2. GET BY ID SERVICE 
export const fetchBookById = async (bookId) => {
    try {
        const response = await fetch(`${BASE_URL}/books/${bookId}`, {
            method: "GET",
            headers: {}
        })

        if (response.ok) {
            const result = await response.json()
            return result
        } else {
            const result = await response.json()
            return result
        } 
    } catch (error) {
        console.err(error)
        throw Error("Error", error)
    }
}

// 2. CREATE SERVICE 
// 3. UPDATE SERVICE 
// 4. DELETE SERVICE 

