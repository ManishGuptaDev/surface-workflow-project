import { type ReactNode, useState } from "react";
import { type ToasterProps } from "~/components/atoms/Toaster/page";

export const useNotification = () => {
    const [notification, setNotification] = useState<ToasterProps | null>(null);

    const setNotificationState = (
        color: string,
        display: boolean,
        icon: ReactNode,
        title: string,
        description: ReactNode | null = null,
    ) => {
        setNotification({
            color,
            display,
            icon,
            title,
            description,
        });
    };


    return {
        notification,
        setNotificationState
    }
}