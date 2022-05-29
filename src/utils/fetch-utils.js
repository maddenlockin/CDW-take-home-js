// fetch takes in username and retrieves URL https://api.github.com/users/<username>
// return success or error message for given username
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { database } from '../firebase';

const collectionRef = collection(database, 'github-urls');

export async function getAllURLs() {
  const response = await getDocs(collectionRef);
  let userURLs = [];
  response.docs.map((doc) => userURLs.push({ ...doc.data(), id: doc.id }));
  return userURLs;
}

export async function createURL(username) {
  await addDoc(collectionRef, username)
}
