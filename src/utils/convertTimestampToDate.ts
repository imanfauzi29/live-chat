import { Timestamp } from "firebase/firestore";

export const convertTimestamp = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    const mm = date.getMonth();
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    return `${dd}-${mm}-${yyyy}`
}

export const convertTimestampToTime = (timestamp: Timestamp) => {
    const date = timestamp.toDate()
    const HH = date.getHours().toString().padStart(2, "0")
    const MM = date.getMinutes().toString().padStart(2, "0")

    return `${HH}:${MM}`
}