import { ADD_NOTE, CONNECTED } from "../../../shared/constants";
import { setNotes } from "../../../shared/actions/notes";

export default (services, socket, action) => {

    const { redisClient, io } = services;

    switch (action.type) {

        case CONNECTED:
            return redisClient.lrangeAsync(`notes`, 0, -1)
                .then(res =>
                    socket.emit(`action`, setNotes(res.map(JSON.parse))));

        case ADD_NOTE:
            return redisClient.rpushAsync(`notes`, JSON.stringify(action.note))
                .then(() =>
                    io.emit(`action`, action));

    }
};
