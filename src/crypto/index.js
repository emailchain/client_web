import cryptico from 'cryptico'

const EmailCrypto = {
    encrypt(message, pubKey, RSAKey) {
        return cryptico.encrypt(message, pubKey, RSAKey);
    },
    decrypt(cipherText, RSAKey) {
        return cryptico.decrypt(cipherText, RSAKey);
    },
    generateKey(passphrase) {
        const bits = 1024;
        return cryptico.generateRSAKey(passphrase, bits);
    },
    pubKey(RSAKey) {
        return cryptico.publicKeyString(RSAKey);
    },
    verify(signature){
        return signature === "verified";
    }
};
export default EmailCrypto