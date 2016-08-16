/**
 *
 * packet type code
 *
 * Date: 2016-05-11 18:40
 * Author: psnail
 *
 */

'use strict';
var PacketType = {

    APPLICATION_SEND : 1,
    APPLICATION_TRACE_SEND : 2,
    APPLICATION_TRACE_SEND_ACK : 3,
	APPLICATION_REQUEST : 5,
    APPLICATION_RESPONSE : 6,


    APPLICATION_STREAM_CREATE : 10,
    APPLICATION_STREAM_CREATE_SUCCESS : 12,
    APPLICATION_STREAM_CREATE_FAIL : 14,

    APPLICATION_STREAM_CLOSE : 15,

    APPLICATION_STREAM_PING : 17,
    APPLICATION_STREAM_PONG : 18,
    
    APPLICATION_STREAM_RESPONSE : 20,

    
    CONTROL_CLIENT_CLOSE : 100,
    CONTROL_SERVER_CLOSE : 110,

    
    CONTROL_HANDSHAKE : 150,
    CONTROL_HANDSHAKE_RESPONSE : 151,

    CONTROL_PING : 200,

	CONTROL_PONG : 201,

    UNKNOWN : 500,

    PACKET_TYPE_SIZE : 2,

};



module.exports = PacketType;
