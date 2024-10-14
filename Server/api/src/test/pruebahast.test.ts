import { decryptData, encryptData } from "../util/hash";

// Obtener la cédula cifrada y el IV almacenado
const encryptedCedula = encryptData("402-3013734-7")
console.log(encryptedCedula)
// Descifrar la cédula
const originalCedula = decryptData(encryptedCedula);
// Mostrar o usar la cédula descifrada
console.log(originalCedula);
