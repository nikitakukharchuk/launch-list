import { instance } from "./instance/instance"

export const launchApi = {
    getAllLaunch() {
        return instance.get(`launch`)
    },
    getOneLaunch(id: string) {
        return instance.get(`launch/${id}`)
    }
} 