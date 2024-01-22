import { DataSet, Timeline } from 'vis-network';

// Create a DataSet for each timeline
const itemsDataSet1 = new DataSet([
  { id: 1, content: 'Event A', start: '2024-01-22' },
  { id: 2, content: 'Event B', start: '2024-01-25' },
  // Add more items as needed
]);

const itemsDataSet2 = new DataSet([
  { id: 3, content: 'Event X', start: '2024-01-23' },
  { id: 4, content: 'Event Y', start: '2024-01-26' },
  // Add more items as needed
]);

// Create timelines
const container = document.getElementById('timeline');
const options = {
  // Set timeline options as needed
};

const timeline1 = new Timeline(container, itemsDataSet1, options);
const timeline2 = new Timeline(container, itemsDataSet2, options);

// Connect events in one timeline to events in another timeline
timeline1.on('select', (properties) => {
  const selectedEvent = properties.items[0];
  // Use the selected event to highlight or navigate to the corresponding event in timeline2
  // You can use methods like setSelection or moveTo to manipulate the second timeline
});

timeline2.on('select', (properties) => {
  const selectedEvent = properties.items[0];
  // Use the selected event to highlight or navigate to the corresponding event in timeline1
});
