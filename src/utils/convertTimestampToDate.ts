import { Timestamp } from "firebase/firestore";

export const convertTimestamp = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    const mm = date.getMonth();
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    return `${dd}/${mm}/${yyyy}`
}