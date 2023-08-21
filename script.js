$(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    const timeBlockId = $(this).parent().attr("id");
    const eventText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, eventText);
  });

  // Apply the past, present, or future class to each time block
  const currentHour = dayjs().format("H"); // Get the current hour in 24-hour format
  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const timeBlockHour = parseInt(timeBlockId.split("-")[1]); // Extract the hour from the ID
    if (timeBlockHour < currentHour) {
      $(this).addClass("past").removeClass("present future");
    } else if (timeBlockHour > currentHour) {
      $(this).addClass("future").removeClass("past present");
    } else {
      $(this).addClass("present").removeClass("past future");
    }
  });

  // Get user input from local storage and set textarea values
  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const savedEvent = localStorage.getItem(timeBlockId);
    if (savedEvent) {
      $(this).find(".description").val(savedEvent);
    }
  });

  // Display the current date in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});