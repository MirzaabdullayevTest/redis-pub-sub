require('source-map-support').install();
import Publish from "./publish";
import Subscribe from "./subscribe";

(async function (){
    const message = {
        id: 123,
        name: 'Pub/Sub',
    }

    const channel = 'local'

    const subscriber = new Subscribe()

    await subscriber.connect()

    await subscriber.sub(channel)

    // =======================

    const publisher = new Publish()

    await publisher.connect()

    await publisher.pub(channel, message)

})()