// fetch takes in username and retrieves URL https://api.github.com/users/<username>
// return success or error message for given username
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { database } from '../firebase';

const collectionRef = collection(database, 'github-urls');

export function getURLs() {
  getDocs(collectionRef).then((snapshot) => {
    let userURLs = [];
    snapshot.docs.map((doc) => userURLs.push({ ...doc.data(), id: doc.id }));
    console.log(userURLs);
    return userURLs;
  });
}

export async function createURL(username) {
  const response = await addDoc(collectionRef, {
    username: username
  })
  console.log(response);
}
