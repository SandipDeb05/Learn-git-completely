let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, (key, value) => {
  if (key === "date") return new Date(value);
  return value;
});

console.log(meetup);
