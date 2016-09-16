[
    {
        "id": "477f4071.91475",
        "type": "mqtt in",
        "z": "883bb2fa.25d228",
        "name": "",
        "topic": "relay",
        "qos": "2",
        "broker": "MQTT.Localhost",
        "x": 150,
        "y": 240,
        "wires": [
            [
                "28262f86.02a2e"
            ]
        ]
    },
    {
        "id": "424e613e.de46d8",
        "type": "inject",
        "z": "883bb2fa.25d228",
        "name": "r1on",
        "topic": "",
        "payload": "r1on",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 150,
        "y": 80,
        "wires": [
            [
                "28262f86.02a2e"
            ]
        ]
    },
    {
        "id": "435a4d08.ae472c",
        "type": "inject",
        "z": "883bb2fa.25d228",
        "name": "",
        "topic": "",
        "payload": "r1off",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 150,
        "y": 120,
        "wires": [
            [
                "28262f86.02a2e"
            ]
        ]
    },
    {
        "id": "5914272e.f7ced8",
        "type": "inject",
        "z": "883bb2fa.25d228",
        "name": "",
        "topic": "relay",
        "payload": "r2on",
        "payloadType": "str",
        "repeat": "",
        "crontab": "55 18 * * *",
        "once": false,
        "x": 170,
        "y": 160,
        "wires": [
            [
                "28262f86.02a2e"
            ]
        ]
    },
    {
        "id": "28262f86.02a2e",
        "type": "function",
        "z": "883bb2fa.25d228",
        "name": "relay control",
        "func": "var buf2;\nif (msg.payload === \"r1on\") {\nbuf2 = Buffer([0xFD,0x02,0x20,0x01,0x01,0x5D]);\n}\nelse if (msg.payload === \"r1off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x01,0x00,0x5D]);\n}\nelse if (msg.payload === \"r2on\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x02,0x01,0x5D]);\n}\nelse if (msg.payload === \"r2off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x02,0x00,0x5D]);\n}\nelse if (msg.payload === \"r3on\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x03,0x01,0x5D]);\n}\nelse if (msg.payload === \"r3off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x03,0x00,0x5D]);\n}\nelse if (msg.payload === \"r4on\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x04,0x01,0x5D]);\n}\nelse if (msg.payload === \"r4off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x04,0x00,0x5D]);\n}\nelse if (msg.payload === \"r5on\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x05,0x01,0x5D]);\n}\nelse if (msg.payload === \"r5off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x05,0x00,0x5D]);\n}\nelse if (msg.payload === \"r6on\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x06,0x01,0x5D]);\n}\nelse if (msg.payload === \"r6off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x06,0x00,0x5D]);\n}\nelse if (msg.payload === \"r7on\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x07,0x01,0x5D]);\n}\nelse if (msg.payload === \"r7off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x07,0x00,0x5D]);\n}\nelse if (msg.payload === \"r8on\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x08,0x01,0x5D]);\n}\nelse if (msg.payload === \"r8off\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0x08,0x00,0x5D]);\n}\nelse if (msg.payload === \"rallon\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0xF8,0x88,0x5D]);\n}\nelse if (msg.payload === \"ralloff\")\n{\nbuf2 = Buffer([0xFD,0x02,0x20,0xF8,0x80,0x5D]);\n}\nelse \n{\nbuf2 = Buffer ()\n}\nmsg.payload = buf2;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 160,
        "wires": [
            [
                "87a5f076.2a5718"
            ]
        ]
    },
    {
        "id": "87a5f076.2a5718",
        "type": "tcp out",
        "z": "883bb2fa.25d228",
        "host": "192.168.0.241",
        "port": "30000",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 730,
        "y": 160,
        "wires": []
    },
    {
        "id": "ad6e917c.9aecb8",
        "type": "inject",
        "z": "883bb2fa.25d228",
        "name": "",
        "topic": "relay",
        "payload": "r2off",
        "payloadType": "str",
        "repeat": "",
        "crontab": "00 19 * * *",
        "once": false,
        "x": 170,
        "y": 200,
        "wires": [
            [
                "28262f86.02a2e"
            ]
        ]
    },
    {
        "id": "MQTT.Localhost",
        "type": "mqtt-broker",
        "origin": "/root/thethingbox/node_modules/node-red/flow/flows.json",
        "broker": "localhost",
        "port": "1883",
        "clientid": ""
    }
]