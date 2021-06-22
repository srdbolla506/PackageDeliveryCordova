
function class_objects() {
    return {
      user: function(data) {
        id = data.id;
        email = data.email;
        user_name = data.user_name;
        lastName = data.lastName;
        firstName = data.firstName; 
        password = data.password;
        role = data.role;
        tasks = []; 
        for (taskData in data.tasks) {
          let taskValue = class_objects().task(taskData, data.id);
          tasks.push(taskValue);
        }
        return self;      
      },

      task: function(data, userId) {
        id = data.id;
        barcodeImage = data.barcodeImage;
        taskName = data.name;
        scheduledDate = data.scheduledDate;
        state = data.state;
        user_id = userId;
        locations = [];
        for (locationData in data.locations) {
          let locationValue = class_objects().location(locationData, data.id);
          locations.push(locationValue);
        }
        return self;
      },

      location: function(data, taskId) {
        id = data.id;
        date = data.date;
        latitude = data.latitude;
        longitude = data.longitude;
        task_id = taskId;
        return self;
      },

      log: function(data) {
        id = data.id;
        datetime = data.datetime;
        event_type = data.event_type;
        extra_info = data.extra_info;
        user_name = data.user_name;
        return self;
      }
    };
}

const UserEnum = {
  id: "id",
  email: "email",
  firstName: "firstName",
  lastName: "lastName",
  password: "password",
  user_name: "user_name",
  role: "role"
}

const TaskEnum = {
  id: "id",
  barcodeImage: "barcodeImage",
  taskName: "taskName",
  scheduledDate: "scheduledDate",
  state: "state",
  user_id: "user_id"
}

const LocationEnum = {
  id: "id",
  date: "date",
  latitude: "latitude",
  longitude: "longitude",
  task_id: "task_id"
}

const LogEnum = {
  id: "id",
  datetime: "datetime",
  event_type: "event_type",
  extra_info: "extra_info",
  user_name: "user_name"
}



function display_alert() {
  const usersJson = '{"id": 12334, "user_name": "harryPotter", "lastName": "Potter", "firstName": "Harry", \
                    "tasks": [{"id": 2321, "taskName": "Create task 1313", "scheduledDate": "2021-09-01 13:09:08"}, \
                              {"id": 1234, "taskName": "Pickup task 1313", "scheduledDate": "2021-02-03 07:05:02"}]}';
  var data = JSON.parse(usersJson);

  let user = class_objects().user(data);

  alert('user values: ' + user.user_name);
}