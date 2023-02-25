var eventsSelect = document.getElementById("events");

var events = {
  A: "Event1",
  B: "Event2",
  C: "Event3",
  D: "Event4",
  E: "Event5",
  F: "Event6",
  G: "Event7",
  H: "Event8",
  I: "Event9",
  J: "Event10"
};

for (var key in events) {
  console.log(key);

  if (events.hasOwnProperty(key)) {
    console.log(key);
    var option = document.createElement("option"); // Create a <p> node
    var t = document.createTextNode(events[key]); // Create a text node
    option.appendChild(t); //Append the text to<p>
    eventsSelect.appendChild(option);
  }
}