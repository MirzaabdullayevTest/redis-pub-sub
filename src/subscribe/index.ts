import {createClient} from 'redis'

export default class Subscribe{
    private subscriber
    constructor() {
        this.subscriber = createClient()
    }

    public async connect(): Promise<void>{
       await this.subscriber.connect()
    }

    public async sub(channel){
        await this.subscriber.subscribe(channel, (message)=>{
            console.log(message)
        })
    }
}