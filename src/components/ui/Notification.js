import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Center,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import NotificationContext from '../../context/NotificationContext'
import { ShopContext } from '../../context/ShopContext'
import classes from './notification.module.css'

const Notification = (props) => {
    // const { status, description } = useContext(ShopContext);
    const notificationCtx = useContext(NotificationContext);
    const data = notificationCtx.notification;

    return (
        <Center >
            <Box className={classes.addToCartNotification} onClick={props.closeNotification}>
                <Alert
                    status={data.status}
                    description={data.description}
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        {data.status}!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        {data.description}
                    </AlertDescription>
                </Alert>
            </Box>
        </Center>
    )
}

export default Notification;


