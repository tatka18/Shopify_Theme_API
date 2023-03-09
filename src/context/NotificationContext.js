import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
    notification: null,
    showNotification: (notificationData) => { },
    hideNotification: () => { }
});

export function NotificationProvider(props) {

    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        // console.log('in useEffect notification activeNotification');
        // console.log(activeNotification);
        if (activeNotification &&
            (activeNotification.status === 'success' || activeNotification.status === 'error')) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 2000);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [activeNotification]);

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }

    return <NotificationContext.Provider value={context}>
        {props.children}
    </NotificationContext.Provider>;
}

export default NotificationContext;