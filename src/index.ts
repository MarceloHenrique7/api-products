import {server} from "./server/Server"
const PORT = 3000

server.listen(process.env.PORT || PORT, () => {
    console.log(`Server run in port: ${process.env.PORT || PORT}`)
})