import cryptico from 'cryptico'

const EmailCrypto = {
    encrypt(message, pubKey, RSAKey) {
        return cryptico.encrypt(message, pubKey, RSAKey);
    },
    decrypt(cipherText, RSAKey) {
        return cryptico.decrypt(cipherText, RSAKey).plaintext;
    },
    generateKey(passphrase) {
        const bits = 1024;
        return cryptico.generateRSAKey(passphrase, bits);
    },
    pubKey(RSAKey) {
        return cryptico.publicKeyString(RSAKey);
    }
};
export default EmailCrypto