import react from 'react'

const Notification = ({messages}) => {
    return (
        <>
        {messages.length > 0 && (
            <p>You have {messages.length} of unread messages.</p>
        )}
        </>
    )
}

export default Notification;