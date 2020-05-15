$(document).ready(function () {
  $("#birthday").datetimepicker({
    format: "d-m-Y",
    formatDate: "d-m-Y",
    startDate: 1980 / 01 / 01,
    timepicker: false,
    inline: false,
    yearStart: 1920,
    yearEnd: new Date().getFullYear(),
    todayButton: false,
    prevButton: false,
    nextButton: false,
  });

  $("#birthday").change(function () {
    const birthday = $("#birthday").val();
    if (birthday === "") return;

    const birthYear = birthday.split("-").slice(-1)[0];
    const currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    // if age is less than 5, compute both year and month
    if (age < 5) {
      const birthMonth = Number(birthday.split("-").slice()[1]);
      const currentMonth = new Date().getMonth() + 1;
      const monthAge = currentMonth - birthMonth;

      let value = "";
      // 2 years and 2 months old
      if (age > 1 && monthAge > 1)
        value = `${age} years and ${monthAge} months old`;
      // 2 years and 1 month old
      else if (age > 1 && monthAge === 1)
        value = `${age} years and ${monthAge} month old`;
      // 1 || 2
      else if (age >= 1 && monthAge === 0) value = age;
      // 1 year and 1 month old
      else if (age === 1 && monthAge === 1) value = `1 year and 1 month old`;
      // 1 year and 2 months old
      else if (age === 1 && monthAge > 1)
        value = `1 year and ${monthAge} months old`;
      // 1 month old
      else if (age < 1 && monthAge === 1) value = `1 month old`;
      // 2 months old
      else if (age < 1 && monthAge > 1) value = `${monthAge} months old`;

      $("#age").val(value);
      return;
    }

    $("#age").val(age);
  });

  $("#visiting-date").datetimepicker({
    format: "d-m-Y",
    formatDate: "d-m-Y",
    timepicker: false,
    inline: false,
    todayButton: false,
    prevButton: false,
    nextButton: false,
    scrollMonth: false,
    showApplyButton: false,

    startDate: new Date(),
    minDate: true,
    yearStart: new Date().getFullYear(),
    yearEnd: new Date().getFullYear() + 1,
    monthStart: new Date().getMonth(),
  });
});
