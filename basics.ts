const username = 'ClaudeIsDumb';
let retryCount = 0;

retryCount = 1;

const doSomething = () => {
    console.log('doing something...');
}

const greet = (name: string) =>
{
    console.log(`Hello, ${name}!`);
}

greet(username);
doSomething();