// fetch takes in username and retrieves URL https://api.github.com/users/<username>
// return success or error message for given username
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const database = getFirestore();
const collectionRef = collection(database, 'github-urls');

export default function getURLs() {
  getDocs(collectionRef).then((snapshot) => {
    let userURLs = [];
    snapshot.docs.map((doc) => userURLs.push({ ...doc.data(), id: doc.id }));
    console.log(userURLs);
    return userURLs;
  });
}