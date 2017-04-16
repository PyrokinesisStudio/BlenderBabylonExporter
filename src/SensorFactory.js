function SensorFactory() {
        this.createSensor = function (blenderObject, babylonObject, handler) {
						
			var sensor;
            type = blenderObject.type;
			console.log(blenderObject.setActuators);
			actuators = blenderObject.setActuators;
			var actuators = blenderObject.setActuators;
            if (type === "KEYBOARD") {
                sensor = new KeyboardSensor();
            } else if (type === "ALWAYS") {
                sensor = new AlwaysSensor();
            } else if (type === "COLLISION") {
                sensor = new CollisionSensor();
            }else if (type === "MOUSE") {
                sensor = new CollisionSensor();
            }else if (type === "JOYSTICK") {
                sensor = new CollisionSensor();
            }else if (type === "RAY") {
                sensor = new CollisionSensor();
            }

            sensor.type = type;

            sensor.say = function () {
                this.sense(babylonObject, actuators, blenderObject, handler);
            }
            return sensor;
        }
    }

    var KeyboardSensor = function()
    {
		
        this.sense = function(babylonObject, actuators, object, sceneForKey)
        {
            //console.log(object.key);
            var key = object.key.toString().toLowerCase();
            key = key.replace(/^\s+|\s+$/g,"");
            //console.log(object.key);
			
			sceneForKey.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) 
			{
				if (evt.sourceEvent.key == key) 
				{
					for (i=0; i < actuators.length; i++)
					{
						actuators[i].say();
					}
				}
			}));
        }
    }

    var CollisionSensor = function()
    {
        this.sense = function(object)
        {
            if (keysDown[("K_" + object.key)])
            {
                console.log("step 1");
            }
        }
    }
    var AlwaysSensor = function()
    {
        this.sense = function()
        {

        }
    }
