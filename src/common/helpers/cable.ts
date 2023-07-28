import { createConsumer } from '@rails/actioncable';
import { SESSION_ID } from '../constants/session-id';

const URL = `ws://localhost:3000/cable?token=${SESSION_ID}&conversation_id=8`;
const consumer = createConsumer(URL);
 
export const CHANNEL_ID = { channel: 'ChatChannel' };

export default consumer;