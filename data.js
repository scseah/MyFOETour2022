var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21745726766380358,
        "pitch": 0.07816332250900793,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.025755835555619555,
          "pitch": -0.18509106882773452,
          "rotation": 6.283185307179586,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.005240697547609585,
          "pitch": 0.29661376339611323,
          "title": "Welcome To NUS",
          "text": "This is the Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.07833763120373938,
        "pitch": 0,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.0007726293950085505,
          "pitch": 0.030984820294124304,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.8064696839391683,
          "pitch": 0.06095331146228844,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.00077306551025913,
          "pitch": 0.16884778949517631,
          "title": "Engineering Auditorium",
          "text": "We Are Right Now Outside of the Engineering Auditorium"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.663433033246898,
        "pitch": -0.044664755719438176,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.107735468119447,
          "pitch": 0.025135767960795974,
          "rotation": 4.71238898038469,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.601996922018838,
          "pitch": 0.010652190695868313,
          "title": "Engineering Auditorium Atrium",
          "text": "We Are Now At the Atrium where we usually see students gathered here."
        }
      ]
    }
  ],
  "name": "Faculty-Of-Engineering-Seah",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
