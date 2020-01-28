import Repository from "./repository";
import { ENDPOINTS } from "./config";
const NodeRepo = {
    chain() {
        return Repository.get(`${ENDPOINTS.CHAIN}/view`);
    },
    peerList() {
        return Repository.get(`${ENDPOINTS.NODE}/peers`);
    },
    generateBlock() {
        return Repository.get(`${ENDPOINTS.CHAIN}/generate`);
    },
    chainInfo() {
        return Repository.get(`${ENDPOINTS.CHAIN}/info`);
    },
    peerDiscovery(payload) {
        return Repository.post(`${ENDPOINTS.NODE}/connect`, {
            ...payload
        });
    },
};
export default NodeRepo;