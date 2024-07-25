import * as redis from 'redis';

export default class Publish{
    private publisher

    constructor() {
        this.publisher = redis.createClient()
    }

    public async connect(): Promise<void>{
        await this.publisher.connect()
    }

    public async pub(channel, message){
        await this.publisher.publish(channel, JSON.stringify(message))
    }
}