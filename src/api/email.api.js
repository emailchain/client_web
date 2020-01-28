import Repository from "./repository";
import { ENDPOINTS } from "./config";
const EmailRepo = {
    mailbox(payload) {
        return Repository.post(`${ENDPOINTS.EMAIL}/mailbox`, {
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