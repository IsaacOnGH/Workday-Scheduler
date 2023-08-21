# Workday-Scheduler

## Overview

This a simple web application designed to help users manage their workday schedule by providing a user-friendly interface to schedule tasks and events throughout the day. The application displays time blocks corresponding to standard business hours, allows users to enter and save events, and indicates whether each event is in the past, present, or future.

## Features

- Display of Current Date: The application prominently displays the current date at the top of the calendar, giving users a clear sense of the current day.

- Time Blocks: The application presents time blocks for standard business hours (9 AM to 5 PM), providing users with a structured view of their workday.

- Color-Coded Events: Each time block is color-coded to indicate whether it represents a past event (gray), the present event (red), or a future event (green). This visual distinction makes it easy for users to identify the timing of each event.

- Event Input and Saving: Users can click on a time block to enter an event description. After entering the event details, they can click the "Save" button associated with that time block. The entered event text is then saved in the browser's local storage, ensuring that the events persist even if the page is refreshed or closed.

- Retrieval of Saved Events: When the user revisits the application, the saved events are retrieved from local storage and displayed in the corresponding time blocks. This feature ensures that users have access to their scheduled events across sessions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IsaacOnGH/Workday-Scheduler.git
   ```
2. Open the **index.html** file in a web browser.

3. The header of the page will display the current date, helping you stay oriented.

4. Scroll down to view the time blocks representing standard business hours.

5. Each time block is color-coded to indicate whether it's in the past, present, or future.

6. Click on a time block to enter an event description in the text area.

7. Click the "Save" button associated with the time block to save the event.

8. The saved event will be stored in the browser's local storage and will persist across sessions.

9. You can refresh the page or revisit the application later to view and update your saved events.

## Technologies Used

- HTML
- CSS
- JavaScript

## Dependencies

- [jQuery](https://jquery.com/): jQuery is used to simplify DOM manipulation and event handling.

- [Day.js](https://day.js.org/): Day.js is utilized to handle date and time operations, including getting the current hour.

## 