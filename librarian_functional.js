/*
функционал добавления, редактирования, удаления книг
функционал просмотра списка книг в фонде
функционал редактирования, удаления пользователей

книга = {
	автор,
	название,
	год издания,
	количество экземпляров,
	статус = [на руках, свободна]
}
читатель = {
	фамилия,
	имя,
	дата рождения
}
*/


import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
export async function AddBook(book) {
	try {
		let docRef = await addDoc(collection(db, 'books'), book);
		console.log('added book with id: ', docRef.id);
	} catch (e) {
		console.log('error: ', e);
	}
}
export async function RedactBook(bookId, newDesc) {
	
}
export async function DeleteBook(bookId) {
	
}
export async function ShowBooks(list) {

}
export async fuction RedactUser(userId, newDesc) {
	
}
export async function DeleteUser(userId) {
	
}