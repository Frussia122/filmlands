import CryptoJS from 'crypto-js';


export const encryptValue = (value: object | null, key: string) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), key);
    return encrypted.toString();
};

export const decryptValue = (encryptedValue: string | null, key: string) => {
  if (encryptedValue) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedValue, key);
    const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedValue);
  } else {
    console.warn('Encrypted value is null. Skipping decryption.');
    return null;
  }
};
  