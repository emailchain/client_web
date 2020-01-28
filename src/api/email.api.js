import Repository from "./api";
import { ENDPOINTS } from "./config";
const EmailRepo = {
    mailbox(payload) {
        return Repository.post(`${ENDPOINTS.EMAIL}/mailbox`, {
            ...payload
        });
    },
    sent(payload) {
        return Repository.post(`${ENDPOINTS.EMAIL}/sent`, {
            ...payload
        });
    },
    add(payload) {
        return Repository.post(`${ENDPOINTS.EMAIL}/new`, {
            ...payload
        });
    },
};
export default EmailRepo;