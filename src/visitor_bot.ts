const fs = require('fs');
import { Conversation, Message } from './types/chat';

function verify(request: NginxHTTPRequest): void {
    // Pasthrough for now
    if (request.method !== 'POST') {
        request.internalRedirect('@app-backend');
        return;
    }

    try {
        const conversation = JSON.parse(request.requestText as string) as Conversation;

        logRequest(conversation);

        // Verify the request
        if (!roleCheck(conversation.messages)) {
            request.return(403, 'Forbidden');
            return;
        }

    } catch (e) {
        request.return(400, 'Bad Request');
        return;
    }

    request.internalRedirect('@app-backend');
    return;
}

function roleCheck(messages: Message[]): boolean {
    // Check if there is a system message
    return messages.filter((message) => message.role === 'system').length === 0;
 }

 function logRequest(conversation: Conversation): void {
    fs.appendFileSync(
        '/tmp/requests.log', 
        JSON.stringify(conversation, null, 2), 
        { encoding: 'utf8', flag: 'a', mode: 0o666 });
 }

export default { verify };