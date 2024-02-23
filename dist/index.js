"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
const PORT = 3000;
Server_1.server.listen(process.env.PORT || PORT, () => {
    console.log(`Server run in port: ${process.env.PORT || PORT}`);
});
