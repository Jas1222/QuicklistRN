import Firebase from "firebase";
import {parseBooksData} from "../utils/Utils";

export function initialiseFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCZMAJt-wraWrIAHWx9XevfEnQL-JhxcOk",
        authDomain: "quicklist-a1ff1.firebaseapp.com",
        databaseURL: "https://quicklist-a1ff1.firebaseio.com",
        projectId: "quicklist-a1ff1",
        storageBucket: "quicklist-a1ff1.appspot.com",
        messagingSenderId: "636434425580",
        appId: "1:636434425580:web:0a6c0320345a4f9d6ee7c9"
    };

    if (Firebase.apps.length === 0 ) {
        try {
            Firebase.initializeApp(firebaseConfig);
        } catch (err) {
            console.warn('!! failed to init fb', err)
        }
    }
}

export async function addListing(listing) {
    Firebase.database().ref('course/' + listing.course + '/Year/1').set({
        year: listing.year,
        author: listing.author,
        isbn: listing.isbn,
        price: listing.price,
        uid: '80085'
    });
}

export async function fetchBookDetails(barcode) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${barcode}&country=UK`

    try {
        const response = await fetch(url);
        const data = await response.json()

        return parseBooksData(data, barcode)
    } catch (err) {
        console.warn('messed up fetching data from GBooks API', err)
    }
}
