const fs = require('fs');

function get_openai(r: any): void {
    if (r.method !== 'POST') {
        return;
    }

    const secret = fs.readFileSync(
        `/run/secrets/openai_token`, 
        'utf8');

    r.setReturnValue(secret);
    return;
}

export default { get_openai };