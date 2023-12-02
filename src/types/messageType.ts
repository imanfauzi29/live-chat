import { Timestamp } from "firebase/firestore"

export type MessageType = {
    id?: string
    text: string,
    displayName: string,
    avatar: string,
    createdAt: Timestamp,
    uid: string
}