import cowsay from 'cowsay'
import os, { version } from 'os'

const reqData = {
    systemType: os.type(),
    release: os.release(),
    version: os.version(),
    hostname: os.hostname(),
    processor: os.cpus()[0].model
}

const modernPrint = (data) => {
    const { systemType, release, version, hostname, processor } = data
    const message = ` 
        Hello, Stranger! 
        Here's your info you requested: 
        SYSTEM INFO: ${systemType} 
        SYSTEM RELEASE: ${release} 
        SYSTEM VERSION: ${version} 
        SYSTEM NODE: ${hostname} 
        SYSTEM PROCESSOR: ${processor} 
        `;
    console.log(cowsay.say({
        text: message,
        e: "oO",
        T: "U "
    }));
}
modernPrint(reqData);