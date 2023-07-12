import { createConsumer } from '@rails/actioncable';
const URL = 'ws://localhost:3000/cable?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjk2NTIyNDA2fQ.wpSUCkF2GgJaCzCDDKzKw4BSTakUTmCz9VsZQcUywN8';
const consumer = createConsumer(URL);
 
export const CHANNEL_ID = JSON.stringify({ channel: 'ChatChannel' })

export default consumer;