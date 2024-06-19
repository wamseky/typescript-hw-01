enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  const isWeekend = (day: DayOfWeek): boolean => {
    const weekend: boolean =
      day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
    return weekend;
  };
  
  console.log(isWeekend(DayOfWeek.Saturday));
  console.log(isWeekend(DayOfWeek.Monday));